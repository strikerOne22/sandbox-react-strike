/* functional component con librería Math */

import React from 'react';

const nuevocliente2 = () => {
    return <p>
      Mi nombre es Rick Grimes <strong> - Nuevo Cliente | Edad: { Math.floor( Math.random() * 30 ) } </strong>  
    </p>
}

export default nuevocliente2;