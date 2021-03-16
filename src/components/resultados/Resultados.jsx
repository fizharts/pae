import React from 'react'


export const Resultados = ( { viajesDisponibles } ) => {

    // viajesDisponibles.data._collection.forEach(item => {
    //     console.log( item._collection[0].segment.marketingCarrier )
        
    // })

    return (
        <table className="table table-responsive-sm">
                      <thead>
                          <tr>
                          <th>Número de vuelo</th>
                          <th>Estado</th>
                          <th>Origen</th>
                          <th>Hora de salida</th>
                          <th>Hora de llegada</th>
                          <th>Destino</th>
                          </tr>
                      </thead>
                      <tbody>
                      {
                        viajesDisponibles.data._collection.map((item , i)=>(
                            <tr style={ { height:'100px' } } key={item._collection[0].segment.marketingCarrier+ item._collection[0].segment.marketingFlightCode}>
                              <td >
                              <h4 className="numeroDeVuelo"> { item._collection[0].segment.marketingCarrier } {item._collection[0].segment.marketingFlightCode}</h4>
                              </td>
                              <td style={{fontSize:'22px'}}>{ 
                                  item._collection[0].segment.flightStatus === null ? (
                                     `-`
                                  ):(` A tiempo`)
                                }</td>
                              <td>  
                                <h4 style={{fontSize:'22px'}}>{ item._collection[0].segment.departureAirport }</h4>
                                
                                <small style={{fontSize:'12px'}}>
                                   Terminal { item._collection[0].arrivalTerminal }
                                </small>
                                    
                            </td>
                            <td>  
                                <h4 style={{fontSize:'22px'}}>{ 
                                    item._collection[0].estimatedArrivalTime 
                                    
                                }</h4>
                                
                                
                                    
                            </td>
                            <td>  
                                <h4 style={{fontSize:'22px'}}>{ 
                                    item._collection[0].estimatedDepartureTime 
                                    
                                }</h4>
                                
                                
                                    
                            </td>
                            <td>  
                            <h4 style={{fontSize:'22px'}}>{ item._collection[0].segment.arrivalAirport  }</h4>
                            
                            <small style={{fontSize:'12px'}}>
                               Terminal { item._collection[0].segment.arrivalAirport }
                            </small>
                                
                        </td>


                            
                          </tr>
                        ))
                      }
                          
                        
                      </tbody>
                  </table>
    )
}
