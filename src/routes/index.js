import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//components
import RecipeDetail from '../pages/recipe_detail/RecipeDetail';
import Products from '../pages/products/Products';

const AppRoutes = () =>
	<div id="application">
		<Switch>
			<Route exact path="/" component={Products} />
			<Route exact path="/recetas" component={Products} />
			<Route exact path="/receta/:slug" component={RecipeDetail} />
			<Redirect from="/receta" to="/"/>
		</Switch>
	</div>


export default AppRoutes;
