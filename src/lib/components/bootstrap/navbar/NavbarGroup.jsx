import React from 'react'
import Base from 'lib/components/Base'

import './ap-navbar.scss'

class BSNavbarGroup extends Base {
	
	constructor(props) {
		super(props)
		this.baseClasses = [ 'nav', 'navbar-nav', 'ap-navbar-group' ]
		this.groupProps = {}
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				children: {},
				id: { store : this.groupProps },
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
			<ul className={this.className} {...this.groupProps}>
				{this.props.children}
			</ul>
		)
	}
}
export default BSNavbarGroup