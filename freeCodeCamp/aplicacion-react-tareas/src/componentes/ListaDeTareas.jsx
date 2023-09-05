import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario'; /*Al mismo Lvl*/
import Tarea from './Tarea';
import '../styles/ListaDeTareas.css';

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]); //Valor inicial es un Array Vacio
  // Array que posteriormente sera de objetos

  const agregarTarea = (tarea) => {
    if(tarea.texto.trim()){ // Eliminamos espacios antes y despues para ver si esta vacio o no
      tarea.texto = tarea.texto.trim();
      
      const tareasActualizadas = [tarea, ...tareas];  //spread de las tareas que ya existian, o como se llame el operador " ... "
      setTareas(tareasActualizadas);  //Añadir las anteriores y la nueva
    }
  };

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);  // 2 " = ", osease modo estricto, diferente tipo de objeto y dato
    //filtra los objetos "tarea" que NO poseean la id buscada, osease no las deja pasar/no las copia
    setTareas(tareasActualizadas);  // lista filtrada
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map( tarea => {
      if (tarea.id === id) {  // 3 " = ", osease modo estricto, mismo tipo de objeto y dato
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    // Busca todo el Array hasta encontrar la TArea que posea el mismo id, al hacerlo, cambia su estado de completada (true/false)
    setTareas(tareasActualizadas);
  };


  return(
    <> {/*Estos no añaden nada nuevo a la estructra de React, son utiles porque en Recat se necesita por lo menos 1 elemento "mayor/madre", y estos no añaden nada necesario, Huh, Neat*/}

      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        { //map, hace que por cada elemento en un array [ arr.map() ] se haga una funcion
          // lo que se pasa dentro del map, sera cada objeto/alemento de dicho array, aka //// "tarea" individual en este caso

          tareas.map((tarea) => 
            <Tarea
              key={tarea.id}  // Propio de React, Debe ser unico, necesario para saber cual va antes o despues 
              id={tarea.id}   // Pasamos la id 2 veces porque KEY NO ES UN PROP, y por eso no podemos acceder al mismo de normal, ergo se envia 2 veces, la necesaria, y la deseada
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>

    </>
  );
}

export default ListaDeTareas;