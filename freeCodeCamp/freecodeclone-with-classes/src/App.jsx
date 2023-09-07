import './styles/App.css';
import Testimonio from './componentes/Testimonio';
import shawn from './img/shawn.png';
import sarah from './img/sarah.png';
import emma from './img/emma.png';
import React from 'react';

/* Diferencia con los componentes funcionales es mas que todo, que los funcionales son mas nuevos y actuales.
Originalmente los componentes clase (como estos) se usaban para usar States y demas, pero ya se pueden usar en los funcionales
Gracias a los Hooks, Pero aun existen los de clase por razon de compatibilidad, su diferencia principal es que REQUIERE
de poseer el Metodo Render, que retorna el componente tipo jsx, (que los funcionales hacen con el retorn de una, sin el render)
y aparte, sus props es con el uso de "this.props"
*/
class App extends React.Component{
render() {
  return(
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio 
          nombre='shawn'
          pais='Singapur'
          imagen={shawn}
          cargo='Ingeniera de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />

        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen={sarah}
          cargo='Ingeniera de Software  '
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />

        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen={emma}
          cargo='Ingeniera de Software  '
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />


      </div>
    </div>
  );
  }
}

export default App
