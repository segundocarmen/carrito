import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import ProductDetail from '../pages/product_detail/ProductDetail';
import Products from '../pages/products/Products';

const AppRoutes = () =>
	<div id="application">
		<Switch>
			<Route exact path="/" component={Products} />
			<Route exact path="/productos" component={Products} />
			<Route exact path="/producto/{id}" component={ProductDetail} />
		</Switch>
	</div>


export default AppRoutes;
