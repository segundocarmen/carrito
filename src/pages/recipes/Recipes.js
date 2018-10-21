import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { ServiceGet, API_DATA } from '../../config/service';

import './Recipes.css';

class Recipes extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			recetas:[]
		};
	}

	componentWillMount(){
		ServiceGet(API_DATA,'',this.loadData);
	}

	componentDidMount(){

	}

	loadData = (data) =>{
		this.setState({recetas:data.meals})
	}

	renderRecetas = () =>{
		const recetas = this.state.recetas;
		return(
			recetas.map((item,index) =>{
				const ruta = "/receta/"+item.idMeal
				return(
					<Link to={ruta}>
						<div key={item.idMeal} className="col s12 m4">
							<div className="card">
								<div className="card-image">
									<img className="responsive-img imgProd" src={item.strMealThumb} />
									<span className="card-title">{item.strMeal}</span>
									<button className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></button>
								</div>
								<div className="card-content">
									<p>
										{
											item.strInstructions.substring(0, 100)
										}
									</p>
								</div>
							</div>
						</div>
					</Link>
				)
			})
		)
	}

	render(){
		return(
			<div>
			<Helmet>
				<title>Recetas :: Lista de recetas</title>
			</Helmet>
				<div>
					<nav>
						<div className="nav-wrapper container">
							<a href="#" className="brand-logo">Mi tienda</a>
							<ul  className="right section">
								<a href="#" className="sidenav-trigger iconSidenav" data-target="menu-side">
									<i className="material-icons">menu</i>
								</a>
							</ul>
							
						</div>
						
				  	</nav>
				</div>
				<div className="container section">
					
					<ul className="sidenav" id="menu-side">
						<li>
							<div className="user-view">
								<div className="background">
									<img className="responsive-img" src="https://st2.depositphotos.com/2430115/11217/i/950/depositphotos_112175240-stock-photo-supermarket-with-blurred-bokeh-background.jpg" alt="" />
								</div>
								<a href="#">
									<img className="circle" src="http://eltoper.com/wp-content/uploads/2016/08/ok.jpg" alt="" />
								</a>
								<a href="">
									<span className="name black-text">John Falcón</span>
								</a>
								<a href="">
									<span className="email black-text">jfalcon910@gmail.com</span>
								</a>
							</div>
						</li>
						<li>
							<a href="">
								<i className="material-icons">cloud</i>
								Primer Elemento
							</a>
						</li>
						<li>
							<div className="divider"></div>
						</li>
						<li>
							<a href="">
								<i className="material-icons">cloud</i>
								Segundo Elemento
							</a>
						</li>
						<li>
							<div className="divider"></div>
						</li>
						<li>
							<a href="">
								<i className="material-icons">cloud</i>
								Tercer Elemento
							</a>
						</li>
					</ul>
					<h3 className="center-align">Productos</h3>
					<div className="row">
						{
							this.renderRecetas()
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Recipes