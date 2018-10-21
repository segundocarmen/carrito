import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { ServiceGet, API_DATA_PRODUCT } from '../../config/service';

class ProductDetail extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			producto:{
				strMeal:'',
			}
		}
	}

	componentWillMount(){
		let producto = this.props.match.params.slug;
		ServiceGet(API_DATA_PRODUCT+producto,'',this.getProduct);
	}

	componentDidMount(){
		
	}

	getProduct = (data) =>{
		const producto = data.meals;
		producto.map((item,index) =>{
			this.setState({producto:item})
		});
	}

	render(){
		//console.log(this.state.producto)
		return(
			<div id="recipe_detail">
				<Helmet>
					<title>Tendeos :: detalle de {this.state.producto.strMeal}</title>
				</Helmet>
				<nav>
					<div className="container">
						<div className="nav-wrapper">
							<Link className="brand-logo" to="/"><i className="material-icons">keyboard_arrow_left</i> Volver</Link>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li>{this.state.producto.strMeal}</li>
							</ul>
						</div>
					</div>
				</nav>
				<div id="recipe_data">
					<div className="container">
						
					</div>			
				</div>
			</div>
		)
	}
}


export default ProductDetail