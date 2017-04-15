import React from 'react'
import Base from 'lib/components/Base'

import './Navbar.scss'

class BSNavbarGroup extends Base {
	
	constructor(props) {
		super(props)
		this.baseClasses = [ 'nav', 'navbar-nav' ]
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				left: { defaultValue: false },
				right: { defaultValue: false },
			}
		}
	}


	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.left) classes.push('navbar-left')
		if (this.props.right) classes.push('navbar-right')
		return classes
	}

	render() {
		this.buildProps('NavbarGroup')
		return (
			<ul className={this.className}>
				{this.props.children}
			</ul>
		)
	}
}
export default BSNavbarGroup