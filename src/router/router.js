import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import App from '../app/App'
import Demo01 from '../page/demo01'
import Demo02 from '../page/demo02'

const RouterConfig = () => (
	<Switch>
		<Route path='/home' component={App}/>
		<Route path='/demo01' component={Demo01}/>
		<Route path='/demo02' component={Demo02}/>
		<Redirect from="/" to="/Demo01"/>
	</Switch>
)

export default RouterConfig