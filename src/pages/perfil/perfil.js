import React from 'react'

import PerfilService from 'perfilService'

import Info from './info'

import './perfil.css'

export default class Perfil extends React.Component {
	state = {}

	componentDidMount() {
		this.loadData()
	}

	loadData() {
		PerfilService.load('kajsdfflk').then(info => {
			this.setState({ info })
		})
	}

	render() {
		return (
			<div>
				<div className="background-image" />
				<div className="perfil-info">
					<div className="perfil-image" />
					<Info {...this.state.info} />
				</div>
			</div>
		)
	}
}