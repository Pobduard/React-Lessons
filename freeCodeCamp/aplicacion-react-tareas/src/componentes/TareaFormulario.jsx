import React, {useState} from 'react';
import '../styles/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value); //Obtiene el valor del elemento que llamo la funcion
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); //Evita volver a cargar toda la pagina
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);
  };

  return(
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />

      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;