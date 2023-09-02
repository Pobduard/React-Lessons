import './styles/App.css';
import React from 'react';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import freeCodeCamp from './img/freeCodeCampLogo.svg';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);  //Son Caracteres
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }
    else {
      alert("Por Favor Ingrese Valores para Realizar los Calculos");
    }
  };

  return (
    <div className="App">
      {
        //TODO: Crear un componente para este logo, asi hacemos un componente facil rehutilizable
      }
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCamp}
          className="freecodecamp-logo"
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        {
          //TODO: Que pasa si se ponen varios operadores seguidos y se le da al igual? tipo " 3+-/++-4 "
          // Se jode y no hace nada, solucionar ese error
        }
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton> 
            {
              //se uso "npm install mathjs", ya que la funcion "evaluate" es de ese paquete
              //y lo que hace es evaluar una cadena de caracteres, para transformarla en matematicas "detras de escenas" en expresion matematicas
            }
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear 
            manejarClear={() => setInput('')}
            >Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
