import React from 'react';
//import Helmet from 'react-helmet';
import './Products.css';

class Products extends React.Component{

	componentWillMount(){
		
	}

	componentDidMount(){

	}

	mostrarNombre = () =>{
		console.log('John')
	}

	render(){
		return(
			<div>
				<h1>Esta es la sección de productos.</h1>
				<p className="text-red">Holi</p>
				<button onClick={this.mostrarNombre}>Mostrar nombre</button>
				<label htmlFor="txtNombre">Nombre</label>
				<input type="text" id="txtNombre" />
			</div>
		)
	}
}

export default Products