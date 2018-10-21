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
						<div className="col s12 m4">
							<div className="card">
								<div className="card-image">
									<img className="responsive-img imgProd" src="http://primaflor.com/wp-content/uploads/2017/02/aceite-vegetal.png" />
									<span className="card-title">Card Title</span>
									<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
								</div>
								<div className="card-content">
									<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
								</div>
							</div>
						</div>
						<div className="col s12 m4">
							<div className="card">
								<div className="card-image">
									<img className="responsive-img imgProd" src="http://primaflor.com/wp-content/uploads/2017/02/aceite-vegetal.png" />
									<span className="card-title">Card Title</span>
									<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
								</div>
								<div className="card-content">
									<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
								</div>
							</div>
						</div>
						<div className="col s12 m4">
							<div className="card">
								<div className="card-image">
									<img className="responsive-img imgProd" src="http://primaflor.com/wp-content/uploads/2017/02/aceite-vegetal.png" />
									<span className="card-title">Card Title</span>
									<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
								</div>
								<div className="card-content">
									<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
								</div>
							</div>
						</div>
						<div className="col s12 m4">
							<div className="card">
								<div className="card-image">
									<img className="responsive-img imgProd" src="http://primaflor.com/wp-content/uploads/2017/02/aceite-vegetal.png" />
									<span className="card-title">Card Title</span>
									<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
								</div>
								<div className="card-content">
									<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
								</div>
							</div>
						</div>
						<div className="col s12 m4">
							<div className="card">
								<div className="card-image">
									<img className="responsive-img imgProd" src="http://primaflor.com/wp-content/uploads/2017/02/aceite-vegetal.png" />
									<span className="card-title">Card Title</span>
									<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
								</div>
								<div className="card-content">
									<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
								</div>
							</div>
						</div>
						<div className="col s12 m4">
							<div className="card">
								<div className="card-image">
									<img className="responsive-img imgProd" src="http://primaflor.com/wp-content/uploads/2017/02/aceite-vegetal.png" />
									<span className="card-title">Card Title</span>
									<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
								</div>
								<div className="card-content">
									<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
								</div>
							</div>
						</div>
						<div className="col s12 m4">
							<div className="card sticky-action">
								<div className="card-image waves-effect waves-block waves-light">
									<img className="activator" src="http://primaflor.com/wp-content/uploads/2017/02/aceite-vegetal.png" />
								</div>
								<div className="card-content">
									<span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>

									<p><a href="#!">This is a link</a></p>
								</div>

								<div className="card-action">
									<a href="#">This is a link</a>
									<a href="#">This is a link</a>
								</div>

								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
									<p>Here is some more information about this product that is only revealed once clicked on.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Products