import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//components
import RecipeDetail from '../pages/recipe_detail/RecipeDetail';
import Recipes from '../pages/recipes/Recipes';

const AppRoutes = () =>
	<div id="application">
		<Switch>
			<Route exact path="/" component={Recipes} />
			<Route exact path="/recetas" component={Recipes} />
			<Route exact path="/receta/:slug" component={RecipeDetail} />
			<Redirect from="/receta" to="/"/>
		</Switch>
	</div>


export default AppRoutes;
