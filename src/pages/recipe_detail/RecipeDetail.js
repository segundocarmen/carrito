import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { ServiceGet, API_DATA_RECIPE } from '../../config/service';

class RecipeDetail extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			receta:{
				strMeal:'',
			}
		}
	}

	componentWillMount(){
		let receta = this.props.match.params.slug;
		ServiceGet(API_DATA_RECIPE+receta,'',this.getProduct);
	}

	componentDidMount(){
		
	}

	getProduct = (data) =>{
		const receta = data.meals;
		receta.map((item,index) =>{
			this.setState({receta:item})
		});
	}

	render(){
		return(
			<div id="recipe_detail">
				<Helmet>
					<title>Recetas :: detalle de {this.state.receta.strMeal}</title>
				</Helmet>
				<nav>
					<div className="container">
						<div className="nav-wrapper">
							<Link className="brand-logo" to="/"><i className="material-icons">keyboard_arrow_left</i> Volver</Link>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li>{this.state.receta.strMeal}</li>
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


export default RecipeDetail