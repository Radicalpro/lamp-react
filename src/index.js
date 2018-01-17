import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import RouterConfig from './router/router'

ReactDOM.render(
	<BrowserRouter>
		<RouterConfig/>
	</BrowserRouter>
	, document.getElementById('root'))
