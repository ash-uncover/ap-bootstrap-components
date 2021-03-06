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
				link: {},
				text: {}
			},
			optionnal : {
				onNavigate: {},				
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
			<a className={this.className} onClick={this.props.onNavigate ? this.onNavigate.bind(this) : null} href={this.props.onNavigate ? null : this.props.link}>
			{this.props.image ?
				<img style={{ height: '36px', marginTop: '-8px' }} alt={this.props.text} src={this.props.image}/>
			:
				this.props.text
			}
			</a>
		)
	}
}
export default BSNavbarBrand