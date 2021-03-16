import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { buscarCod, Dias, getAerports, getViaje } from "../../fun/fun";
import switchSvg from "../../img/switch.svg";
import { Resultados } from "../resultados/Resultados";

export const Contenedor = () => {
  const [aeropuertos, setAeropuertos] = useState(null);
  const [viajesDisponibles, setViajesDisponibles] = useState(null)
 let m = moment()
 let f =  m.format('YYYY-MM-DD')
 let hoyFecha = m.format('DD')
 let mesHoy = m.format('MM')
 let hoy = `${hoyFecha} de ${Dias(mesHoy)}`
 let ayer = `${hoyFecha-1} de ${Dias(mesHoy)}`
 let manana = `${parseInt(hoyFecha) + 1} de ${Dias(mesHoy)}`


 let fechas = [
     {
         nombre : hoy ,
         fecha : f
     },
     {
         nombre : ayer ,
         fecha : `${m.format('YYYY')}-${ m.format('MM') }-${ parseInt(m.format('DD'))  - 1  } `
     } ,
     {
        nombre : manana,
        fecha : `${m.format('YYYY')}-${ m.format('MM') }-${ parseInt(m.format('DD'))  + 1  } `
    }
 ]

 const [objFormulario, setObjFormulario] = useState({
    origen : '',
    destino : '',
    fecha : f
})



const handleChange = ( e ) =>{

    setObjFormulario({
        ...objFormulario ,
        [e.target.name] : e.target.value     
    })
}



const handleSubmit = (e)=>{
    e.preventDefault();

    if(objFormulario.origen === ''){
        return
    }

    if (objFormulario.destino === '') {
        return
    }

        getViaje(buscarCod(aeropuertos , objFormulario.origen) , buscarCod(aeropuertos , objFormulario.destino) , objFormulario.fecha )
                .then(res=>{
                        console.log(res.data._collection)
                        setViajesDisponibles(res)
                    })
}



  useEffect(() => {
    getAerports().then((res) => setAeropuertos(res.data.airports));
  }, []);

  return (
    <Fragment>
      <div className="containerAzul">
        <form className="form " >
          <div className="cajaText">
            <div className="control radios separadorRadio   pl-5 pt-4">
              <div className="cont-radios">
                <input type="radio" id="destino" name="destino" />
                <label className="etiqueta" htmlFor="destino">
                  Destino
                </label>
              </div>
              <div className="cont-radios">
                <input type="radio" id="numeroDeVuelo" name="destino" />
                <label className="etiqueta" htmlFor="numeroDeVuelo">
                  Número de vuelo
                </label>
              </div>
            </div>
            <div className="control separador ">
              <div className="selecOptions">
                <span>Origen</span>
                <span>| Ver todos</span>
              </div>
              <div>
                <input type="text" list="aeropuertos" name="origen" placeholder="Origen" onChange={ (e)=> handleChange(e) } />
                <datalist id="aeropuertos">
                {
                    aeropuertos !== null ? (
                        aeropuertos.map(({airport:{alias ,country ,airportName , code} } , i)=>(
                        
                            <option key={alias+airportName+code+i} value={airportName}>{airportName}{country}</option>
                            
                        
                    ))
                    ):null
                }

                </datalist>
              </div>
            </div>
            <div className="switch d-none d-xl-flex">
              <img
                src={switchSvg}
                alt="switch"
                className="ml-2 pt-2 pl-2"
                style={{ width: 40 }}
              />
            </div>
            <div className="control">
              <div className="selecOptions">
                <span>Destino</span>
                <span>| Ver todos</span>
              </div>
              <div>
                <input type="text" list="aeropuertos" name="destino" placeholder="Destino" onChange={ (e)=> handleChange(e) }  />
              </div>
            </div>
            <div className="control selectC">
              <div className="selecOptions">
                <span>Fecha de Salida</span>
              </div>
              <div>
                <select name="fecha" onChange={ (e)=> handleChange(e) }>
            
                  {
                    fechas.map(res => (
                        <option key={res.fecha} className="textS " value={res.fecha}> {res.nombre} </option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="control ">
              <input
                type="submit "
                className="enviar"
                defaultValue="Buscar "
                onClick={ (e)=>handleSubmit(e)}
              />
            </div>
          </div>
        </form>
      </div>
    

                  

      <section className="resultados ">
                {
                   
                    viajesDisponibles && <Resultados  viajesDisponibles = {viajesDisponibles}/>
                     
                }

      </section>

    </Fragment>
  );
};
