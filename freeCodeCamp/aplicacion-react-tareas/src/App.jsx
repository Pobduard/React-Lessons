import { useState } from 'react'
import './styles/App.css'
import freeCodeCampLogo from './img/freeCodeCampLogo.svg'

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
        
      </div>


    </div>
  )
}

export default App
