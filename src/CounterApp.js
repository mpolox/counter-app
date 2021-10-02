import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ( {myValue = 0} ) => {

  const [counter, setCounter] = useState(myValue);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter ( (c) => c + 1);
  }

  const handleSubstract = () => setCounter(counter - 1);  

  const handleReset = () => {
    setCounter(myValue);
  } 

  return(
    <Fragment>
      <h1>CounterApp</h1>
      <p>Contador: { counter }</p>
      <button onClick={ handleAdd }>+</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleSubstract }>-</button>
    </Fragment>
  );
}

CounterApp.propTypes = {
  myValue: PropTypes.number
};

export default CounterApp;