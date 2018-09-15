import React from 'react'

import './perfil.css'

export default class Perfil extends React.Component {
	render() {
    console.log(this.props)
		return (
			<div className="info-wrapper">
        <span className="name">
          { this.props.name } ({ this.props.nickname})
        </span>

        <span className="rank">{ this.props.rank }</span>

        <div className="other-info">
          <span>{ this.props.age } anos</span>
          <div className="skills-wrapper">
            {
              this.props.skills &&
              this.props.skills.map((skill, index) => (
                <span key={index}>{ skill }, &nbsp;</span>
              ))
            }
          </div>
          <span>{ this.props.score } pontos</span>
        </div>
			</div>
		)
	}
}
