import React from 'react';
import '../styles/Contador.css';

/* Toca seguir usando la syntaxis de this.props para que agarren
los props cuando son desestrados de esta forma */

class Contador extends React.Component {
render(){
	return(
		<div className='contador'>
			{this.props.numClicks}
		</div>
	);
}}

export default Contador;