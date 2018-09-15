import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from './pages/home'
import Perfil from './pages/perfil/perfil'
import Header from './components/header/header'

import './styles'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<div>
						<Route exact path="/" component={ Home } />
						<Route path="/perfil" component={ Perfil } />
					</div>
				</Router>
			</div>
		)
	}
}

render(<App />, document.getElementById('main'))