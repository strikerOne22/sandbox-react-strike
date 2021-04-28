/* ejemplo de class based component siempre debe heredar de la clase Component */


import React, {Component} from 'react';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2';
import NuevoCliente3 from './NuevoCliente3';
import './index.css';

class verclientes1 extends Component{
    render(){
        return(
            <div className="contClientes">
                <h4>Uso de Class Based Component</h4>
                <NuevoCliente1/>
                <NuevoCliente2/>
                <NuevoCliente3 name="Ragnar Lothbrock" age="38"/>
            </div>
        )
    }
}

export default verclientes1;