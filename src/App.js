import React, { Component } from 'react';
import Forms from './sections/forms';
import Children from './sections/children';
import FetchExample from './sections/fetch-example';
import EjemploCicloActualizacion from './sections/life-cycle/ejemploCicloActualizacion';
import EjemploComponentWillUnmount from './sections/life-cycle/ejemploComponentWillUnmount';
import EjemploComponentDidCatch from './sections/life-cycle/ejemploComponentDidCatch';
import ComponentVSHerencia from './sections/buenas-practicas/component-vs-herencia';
import StatelessComponent from './sections/buenas-practicas/stateless-component';
import BitCoinPriceContainer from './sections/container-component/bitcoin-container';

function App() {
  return (
    <div className="App">
      <h4>Appos</h4>
      <BitCoinPriceContainer></BitCoinPriceContainer>
    </div>
  );
}

export default App;
