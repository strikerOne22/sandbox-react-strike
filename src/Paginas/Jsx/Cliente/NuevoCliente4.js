/*
    Componente para ver ejemplo de Props : parámetros
    Java: getters - setters
    Un props puede tener cualquier tipo de datos
    -- PASO DE PARÁMETROS ENTRE COMPONENTES --
    Usando class based component

*/

import React, {Component} from 'react';

class nuevocliente4 extends Component {
    render(props){
        return (
            <p>
                Mi nombre es {this.props.name} <strong> - Nuevo Cliente | Edad: {this.props.age} </strong>  
            </p>
        )
    }
}

export default nuevocliente4;