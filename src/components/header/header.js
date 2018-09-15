import React from 'react'
import './header.css'

export default class Perfil extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="image-logo">
					<img src={require('images/logo.png')} width="100px"/>
				</div>
				<div className="perfil">

				</div>
			</div>
		)
	}
}