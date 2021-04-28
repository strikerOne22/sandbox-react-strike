/*
    Componente para ver ejemplo de Props : parámetros
    Java: getters - setters
    Un props puede tener cualquier tipo de datos
    -- PASO DE PARÁMETROS ENTRE COMPONENTES --


*/

import React from 'react';

const nuevocliente3 = (props) => {
    return (
        <p>
            Mi nombre es {props.name} <strong> - Nuevo Cliente | Edad: {props.age} </strong>  
        </p>
    )
}

export default nuevocliente3;