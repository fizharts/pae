import axios from "axios"

export const getAerports = async() => {

    try {
        const res = await axios.get('https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1')
        return res
    } catch (error) {
        console.log(error)
    }


}


export const getViaje = async(origen, destino, fecha) => {
    try {
        const res = await axios.get(`https://www.aeromexico.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=&date=${fecha.trim()}&origin=${origen}&destination=${destino}`)
        return res
    } catch (error) {
        console.log(error)
    }


}

export const buscarCod = (viajes, busqueda) => {
    console.log(viajes)
    console.log(busqueda)

    let final = viajes.filter(item => {
        if (item.airport.airportName === busqueda) {
            return item.airport
        }

    })

    return final[0].airport.code

}


export const Dias = (mes) => {

    let mesFinal

    switch (mes.toString()) {
        case '01':
            mesFinal = 'enero'
            break;
        case '02':
            mesFinal = 'febrero'
            break;
        case '03':
            mesFinal = 'marzo'
            break;
        case '04':
            mesFinal = 'abril'
            break;
        case '05':
            mesFinal = 'mayo'
            break;
        case '06':
            mesFinal = 'junio'
            break;
        case '07':
            mesFinal = 'julio'
            break;
        case '08':
            mesFinal = 'agosto'
            break;
        case '09':
            mesFinal = 'septiembre'
            break;
        case '10':
            mesFinal = 'octubre'
            break;
        case '11':
            mesFinal = 'noviembre'
            break;
        case '12':
            mesFinal = 'diciembre'
            break;

        default:
            break;



    }

    return mesFinal


}