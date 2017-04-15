import React from 'react'

export default class APNavbarHeader extends React.Component {
	
	constructor(props) {
		super(props)
	}

	onNavigate() {
		if (!this.props.disabled && this.props.onNavigate) {
			this.props.onNavigate(this.props.link)
		}
	}

	render() { return (
		<div className='ap-navbar-header navbar-header'>
			<a className='navbar-brand' onClick={this.onNavigate.bind(this)}>
				<img className='ap-navbar-header-img' alt={this.props.text} src={this.props.image}/>
			</a>
		</div>
	);}
}
