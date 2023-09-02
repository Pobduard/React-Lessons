import React from 'react';
import '../styles/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
  <button 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()}
    onClick={() => props.manejarClick(props.children)
      //sirve porque es funcion de flecha, osease se llamara SOLO cuando suceda el click, sin eso es la llamada a la funcion, mas no le metemos una funcion al onClick
      // Debemos recordar que en esto debemos meterle es una funcion, no la invocacion a la misma, osea solo el nombre, sin el (), que aqui usamos para el input
      // por lo que la acabamos llamando SIEMPRE, para evitar eso, es que hacemos la de flecha
    }
    >
    {props.children}
  </button>);
}

export default Boton;
