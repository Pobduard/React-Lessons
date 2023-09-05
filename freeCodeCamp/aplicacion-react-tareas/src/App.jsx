import './styles/App.css';
import freeCodeCampLogo from './img/freeCodeCampLogo.svg';
import ListaDeTareas from './componentes/ListaDeTareas';

/*
  [Retos]
    > Buscar forma de almacenar la Tarea que ingresa el usuario (vuelvan a salir una vez se vuelva a entra a la app) [aka Cookies?]

  [min 7:12:03  COMPONENTES DE CLASE]
*/

function App() {

  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='FreeCodeCampLogo' />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>


    </div>
  )
}

export default App
