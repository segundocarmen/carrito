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

	sendComentaries = (event) =>{
		event.preventDefault();
	}

	render(){
		return(
			<div id="recipe_detail">
				<Helmet>
					<title>Recetas :: detalle de {this.state.receta.strMeal}</title>
					<meta name="description" content={this.state.receta.strMeal} />
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
						<div className="row">
							<div className="col s12 m8">
								<h5>Detalle de la receta</h5>
								<div className="card large">
									<div className="card-image">
										<img src={this.state.receta.strMealThumb} alt={this.state.receta.strMeal} />
										<span className="card-title">{this.state.receta.strMeal}</span>
									</div>
									<div className="card-content">
										{this.state.receta.strInstructions}
									</div>
								</div>
							</div>
							<div className="col col s12 m8">
								<br></br>
								<p className="caption">Comentarios</p>
								<div className="row">
									<form className="col s12" onSubmit={this.sendComentaries}>
										<div className="row">
											 <div className="input-field col s6">
												<i className="material-icons prefix">mode_edit</i>
												<textarea placeholder="Comentarios" id="icon_prefix2" className="materialize-textarea"></textarea>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col col s12 m8">
								<ul className="collection">
									<li className="collection-item avatar">
										<i className="material-icons circle">folder</i>
										<span className="title">Title</span>
										<p>First Line <br/>Second Line</p>
										<button className="secondary-content"><i className="material-icons">grade</i></button>
									</li>
									<li className="collection-item avatar">
										<i className="material-icons circle">folder</i>
										<span className="title">Title</span>
										<p>First Line <br/>Second Line</p>
										<button className="secondary-content"><i className="material-icons">grade</i></button>
									</li>
									<li className="collection-item avatar">
										<i className="material-icons circle">folder</i>
										<span className="title">Title</span>
										<p>First Line <br/>Second Line</p>
										<button className="secondary-content"><i className="material-icons">grade</i></button>
									</li>
									<li className="collection-item avatar">
										<i className="material-icons circle">folder</i>
										<span className="title">Title</span>
										<p>First Line <br/>Second Line</p>
										<button className="secondary-content"><i className="material-icons">grade</i></button>
									</li>
								</ul>
							</div>
						</div>
					</div>			
				</div>
			</div>
		)
	}
}


export default RecipeDetail
