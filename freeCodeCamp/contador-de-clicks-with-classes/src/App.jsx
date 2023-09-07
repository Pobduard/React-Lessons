import './styles/App.css';
import React from 'react';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import freeCodeCampLogo from './img/freeCodeCampLogo.svg';

/*
+ Basicamente inutiles porque en los com Funcionales se puede hacer todo, mas facil y consizo, pero exiten por Retroactiviadad
+ Quizas buena idea buscar sobre los metodos de "Ciclo de vida", no expreso si son unicos o no a los Comp de Clase o no pero probablemente lo sean
+ 	Ya que permiten hacer cosas especificas (diseñadas) en ciertos momentos de la vida del componente, ejemplo cuando se crea el componente (suena a constructor y destructor)
*/

class App extends React.Component {
	constructor(props) {	// props en caso de que los posea, si no da igual si se ponen o no
		super(props);	//+ Necesario para Heredar todo de React.Component (da error si no)
		this.state = {	//+ Este ES el estado, lo podemos inicializar de una, y es un objeto que tendra todas las propiedadees necesarias
			numClick: 0	//+ como es un obejto, se maneja y modifica como tal
		};
//! NECESARIAS PARA QUE LAS FUNCIONES, AL PASARLO A OTROS COMPONENTES, SIGAN FUNCIONANDO
//! Por asi decirlo, permite que Js sepa cual componente pertenece al "this", osease, que el this vaya a su componente corecto/respectivo
//! de ahi el .bind "anclar" por asi decirlo
		this.manejarClick = this.manejarClick.bind(this);
		this.reiniciarContador = this.reiniciarContador.bind(this);
//+
	}

//+[Metodos necesarios]

	manejarClick(){
//+ usado para actualizar el state, el objeto
//+ Pero ES un objeto que puede tener muchas propiedades, como modificamos solo 1? podemos ingeniarnosla, o podemos simplemente
//+ Usar el Objeto que ya teniamos, desestructarlo (con "{}") y agarrar como parametro a la funcion, solo la propiedad deseada
//+ igualmente despues, podemos usar ese parametro como var, y modificar nuevamente solo la propiedad deseada
		this.setState(
		//+ Pasamos un objeto total, lo desestructuramos y agarramos el valor que este Solamente en la propiedad dentro de {}
		//+ luego esa variable agarrada (propiedad) la usamos para modificar solo la propiedad deseada (objeto que posee la propiedad, "aislando" que se cambia/actualiza)
		//+	 parametro        propiedad     parametro modificando la propiedad
			( {numClick} ) => ( {numClick:  numClick+1} )
		);
	}

//+ tambien pueden tener parametros
	reiniciarContador(){
		this.setState( ( {numClick: 0} ) );	//+ Solo se pasa eso
	};

	render(){
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
					<Contador numClicks={this.state.numClick} />
		
					<Boton 
						texto='Click'
						esBotonDeClick={true}
						manejarClick={
							this.manejarClick //this.metodo, porque ahora es de clase
						} />
		
					<Boton 
						texto='Reiniciar'
						esBotonDeClick={false}
						manejarClick={this.reiniciarContador} />
				</div>
			</div>
		  );
	};
};

export default App;