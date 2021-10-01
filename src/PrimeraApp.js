//Functional Componets
import React, { Fragment } from 'react';

const PrimeraApp = ( {saludo="N/A"} ) => {

  return (
    <Fragment>
      <h1>Marcopolo: { saludo }</h1>
      <p>Mi primer componente</p>
    </Fragment>
  );
}

export default PrimeraApp;