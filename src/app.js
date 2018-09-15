import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from './pages/home'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/home" component={Home} />
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('main'))