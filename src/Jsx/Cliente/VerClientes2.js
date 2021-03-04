import React, { useState } from 'react';
import Nuevocliente5 from './NuevoCliente5';

function verclientes2(){
    //utilizando states para evitar hardcode de valores, unicamente funciona con class based Components
   const persons = () => {
       const [persons, setPersons] = useState( 
            [
                {nombre: 'Irving Jhonson', edad: 40},
                {nombre: 'Isaiah Thomas', edad: 38},            
                {nombre: 'Charles Barkley', edad: 26}
            ]
        );
   };

    return(
        <div >
            <p>Uso de componentes functional</p>
            <Nuevocliente5 nombre={this.persons[0].nombre} edad={this.persons[0].edad}>Equipo: Lakers</Nuevocliente5>
            <Nuevocliente5 nombre={this.persons[1].nombre} edad={this.persons[1].edad}>Equipo: Pistons</Nuevocliente5>            
            <Nuevocliente5 nombre={this.persons[2].nombre} edad={this.persons[2].edad}>Equipo: Suns</Nuevocliente5>            
        </div>

    )

}

export default verclientes2;