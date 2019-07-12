import React, { Component } from 'react';
import Forms from './sections/forms';
import Children from './sections/children';
import FetchExample from './sections/fetch-example';
import EjemploCicloActualizacion from './sections/life-cycle/ejemploCicloActualizacion';

function App() {
  return (
    <div className="App">
      <h4>Appos</h4>
      <EjemploCicloActualizacion></EjemploCicloActualizacion>
    </div>
  );
}

export default App;
