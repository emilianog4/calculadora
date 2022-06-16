import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import logo from './imagenes/logo.png';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
 
  const [input, setInput] = useState('');
 
  let ultimocaracter=input.length-1;

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '=');
  };

  const agregarInput = val => {
    setInput(input + val);
  }
  const agregarSigno = val => {
    setInput(input + val);
      if(esOperador(input.charAt(ultimocaracter)) && esOperador(val)){
        alert("ERROR: escribio dos signos de operacion seguidos!")
        setInput('');
        }
      console.log("anteultimocaracter:",input.charAt(ultimocaracter));
      console.log("val:",val);
      console.log("input:",input);
  };


  const calcularResultado = () => {
    if(input) {
    setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para calcular el resultado");
    }
  };
 
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
         src= {logo}
         className='logo' 
         alt="Logo de React" 
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarSigno}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarSigno}>-</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarSigno}>*</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarSigno}>.</Boton>
          <Boton manejarClick={agregarSigno}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')} >Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
