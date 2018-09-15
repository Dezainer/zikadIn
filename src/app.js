import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from './pages/home'
import Header from './components/header/header'

import './styles'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<div>
						<Route exact path="/home" component={Home} />
					</div>
				</Router>
			</div>
		)
	}
}

render(<App />, document.getElementById('main'))