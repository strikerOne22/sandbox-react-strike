import React from 'react';
import NuevoCliente1 from './NuevoCliente1';
import Nuevocliente2 from './NuevoCliente2';
import Nuevocliente3 from './NuevoCliente3';
import Nuevocliente4 from './NuevoCliente4';

function verclientes(){
    return(
        <div>
            <NuevoCliente1 />
            <Nuevocliente2 />
            <Nuevocliente3 nombre="Lionel Messi" edad="33">Hobbies: Jugar Play</Nuevocliente3>
            <Nuevocliente4 nombre="Ansu Fati" edad="19">Hobbies: Jugar NES</Nuevocliente4>
        </div>

    )

}

export default verclientes;