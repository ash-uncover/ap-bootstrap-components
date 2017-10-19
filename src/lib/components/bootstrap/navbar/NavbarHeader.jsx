import React from 'react'
import Base from 'lib/components/Base'

import { NavbarBrand } from 'lib/exports'

import './ap-navbar.scss'

class BSNavbarHeader extends Base {
	
	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'navbar-header', 'ap-navbar-header' ]
		// Sub component properties
		this.collapseProps = {}
		this.brandProps = {}
		// Component properties
		this.propsInfos = {
			required : {
				target: { rename: 'data-target', store: this.collapseProps },
				brandText: { rename: 'text', store: this.brandProps },
				brandLink: { rename: 'link', store: this.brandProps },
			},
			optionnal : {
				onNavigate: { store: this.brandProps },				
				brandImage: { rename: 'image', store: this.brandProps }
			}
		}
	}

	render() { 
		this.buildProps('NavbarHeader')
		return (
			<div className={this.className}>
				<button type="button" className="navbar-toggle" data-toggle="collapse" {...this.collapseProps}>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span> 
				</button>
				<NavbarBrand {...this.brandProps} />
			</div>
		)
	}
}
export default BSNavbarHeader