//Functional Componets
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ( {saludo, subtitulo = 'Español'} ) => {
  console.log("Entro aqui...")
  return (
    <Fragment>
      <h1>Marcopolo: { saludo }</h1>
      <p>Mi primer componente</p>
      <p>Subtitulo: { subtitulo }</p>
    </Fragment>
  );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
};

export default PrimeraApp;