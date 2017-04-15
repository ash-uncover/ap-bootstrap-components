import React from 'react'
import Base from 'lib/components/Base'

import './ap-navbar.scss'

class BSNavbarBrand extends Base {
	
	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'navbar-brand', 'ap-navbar-brand' ]
		// Component properties
		this.propsInfos = {
			required : {
				text: {}
			},
			optionnal : {
				onNavigate: {},
				link: {},
				image: {}
			}
		}
	}

	onNavigate(event) {
		event.preventDefault()
		if (this.props.onNavigate) {
			this.props.onNavigate(this.props.link)
		}
	}

	render() { 
		this.buildProps('NavbarBrand')
		return (
			<a className={this.className} onClick={this.onNavigate.bind(this)}>
			{this.props.image ?
				<img alt={this.props.text} src={this.props.image}/>
			:
				this.props.text
			}
			</a>
		)
	}
}
export default BSNavbarBrand