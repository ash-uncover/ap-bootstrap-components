import React from 'react'
import Base from 'lib/components/Base'

import { NavbarBrand } from 'lib/exports'

import './Navbar.scss'

class BSNavbarHeader extends Base {
	
	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'navbar-header' ]
		// Sub component properties
		this.brandProps = {}
		// Component properties
		this.propsInfos = {
			required : {
				brandText: { rename: 'text', store: this.brandProps }
			},
			optionnal : {
				onNavigate: { store: this.brandProps },
				brandLink: { rename: 'link', store: this.brandProps },
				brandImage: { rename: 'image', store: this.brandProps }
			}
		}
	}

	render() { 
		this.buildProps('NavbarHeader')
		return (
			<div className={this.className}>
				<NavbarBrand {...this.brandProps} />
			</div>
		)
	}
}
export default BSNavbarHeader