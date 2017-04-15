import React from 'react';
import Base from 'lib/components/Base'

import './Navbar.scss'

class BSNavbar extends Base {
	
	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'navbar', 'ap-navbar' ]
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				fluid: { defaultValue: false },
				inverse: { defaultValue: false },
				fixedTop: { defaultValue: false },
				fixedBottom: { defaultValue: false },
				staticTop: { defaultValue: false },
				children: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		classes.push('navbar-' + (this.props.inverse ? 'inverse' : 'default')) 
		if (this.props.fixedTop) classes.push('navbar-fixed-top')
		if (this.props.fixedBottom) classes.push('navbar-fixed-bottom')
		if (this.props.staticTop) classes.push('navbar-static-top')
		return classes
	}

	render() { 
		this.buildProps('Navbar')
		return (
			<nav className={this.className}>
				<div className={'container' + (this.props.fluid ? '-fluid' : '')}>
					{this.props.children}
				</div>
			</nav>
		);
	}
}
/*
<NavbarGroup {...this.props.left} />
					<NavbarGroup {...this.props.right} />
					*/
export default BSNavbar