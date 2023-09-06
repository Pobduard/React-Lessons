import React from 'react';
import vitePluginRequire from "vite-plugin-require";
import '../styles/Testimonio.css';

export function Testimonio(props){

	const sarah = "../img/sarah.png";
	const shawn = "../img/shawn.png";
	const emma = "../img/emma.png";

	return(
		<div className='contenedor-testimonio'>

			<img className='imagen-testimonio' src={props.imagen} alt={`Foto de ${props.nombre}`} />
			<div className='contenedor-texto-testimonio'>
				<p className='nombre-testimonio'>
					<strong>{props.nombre}</strong> en {props.pais}
					</p>
				<p className='cargo-testimonio'>
					{props.cargo} en <strong>{props.empresa}</strong>
					</p>
				<p className='texto-testimonio'>
					"{props.testimonio}"
					</p>
			</div>
		</div>
	);
}