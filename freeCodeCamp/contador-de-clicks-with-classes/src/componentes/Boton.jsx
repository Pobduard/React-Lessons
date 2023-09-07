import React from 'react';
import '../styles/Boton.css'

/* Toca seguir usando la syntaxis de this.props para que agarren
los props cuando son desestrados de esta forma */
class Boton extends React.Component {
render(){
	return(
		<button
			className={this.props.esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
			onClick={this.props.manejarClick}>
			{this.props.texto}
		</button>
	);
}}

export default Boton;