import React, { useState } from 'react';
import NuevoCliente1 from './NuevoCliente1';
import Nuevocliente2 from './NuevoCliente2';
import Nuevocliente3 from './NuevoCliente3';
import Nuevocliente4 from './NuevoCliente4';
import Nuevocliente5 from './NuevoCliente5';

function verclientes(){
    //utilizando states para evitar hardcode de valores, unicamente funciona con class based Components
    /*
    state = {
        persons: [
            {nombre: 'Irving Jhonson', edad: 40},
            {nombre: 'Isaiah Thomas', edad: 38},            
            {nombre: 'Charles Barkley', edad: 26}
        ]
    }
    */
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
        <div>
            <NuevoCliente1 />
            <Nuevocliente2 />
            <Nuevocliente3 nombre="Lionel Messi" edad="33">Hobbies: Jugar Play</Nuevocliente3>
            <Nuevocliente4 nombre="Ansu Fati" edad="19">Hobbies: Jugar NES</Nuevocliente4>
            <Nuevocliente5 nombre="Lebron James" edad="30">Hobbies: Jugar BKB</Nuevocliente5>            
            <p>Uso de componentes class based y states</p>
            <ClientesTipo1 />
            <p>Uso de componentes functional</p>
            <ClientesTipo2 />            
            <Nuevocliente5 nombre={this.persons[0].nombre} edad={this.persons[0].edad}>Equipo: Lakers</Nuevocliente5>
            <Nuevocliente5 nombre={this.persons[1].nombre} edad={this.persons[1].edad}>Equipo: Pistons</Nuevocliente5>            
            <Nuevocliente5 nombre={this.persons[2].nombre} edad={this.persons[2].edad}>Equipo: Suns</Nuevocliente5>            
        </div>

    )

}

export default verclientes;