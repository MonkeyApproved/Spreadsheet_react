import React from 'react';
import style from './App.module.css';
import EquationInput from './components/EquationInput/EquationInput';

function App() {
  return (
    <div className={style.App}>
      <EquationInput name="A1"></EquationInput>
      <EquationInput name="A2"></EquationInput>
      <EquationInput name="A3"></EquationInput>
    </div>
  );
}

export default App;
