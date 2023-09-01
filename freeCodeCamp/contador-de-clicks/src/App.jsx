import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import freeCodeCampLogo from './img/freeCodeCampLogo.svg';
import { useState } from 'react';

function App() {

	const[numClick, setNumClicks] = useState(0);

	const manejarClick = () => {
		setNumClicks(numClick + 1);
	};

	const reiniciarContador = () => {
		setNumClicks(0);
	};

return (
	<div className="App">
		<div className="freecodecamp-logo-contenedor">
			<img
				className="freecodecamp-logo"
				src={freeCodeCampLogo}
				alt="Logo de FreeCodeCamp"
			/>
		</div>
		<div className="contenedor-principal">
			<Contador numClicks={numClick} />

			<Boton 
				texto='Click'
				esBotonDeClick={true}
				manejarClick={manejarClick} />

			<Boton 
				texto='Reiniciar'
				esBotonDeClick={false}
				manejarClick={reiniciarContador} />
		</div>
	</div>
  );
}

export default App;