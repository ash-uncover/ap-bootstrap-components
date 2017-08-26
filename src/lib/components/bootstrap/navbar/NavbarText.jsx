import React from 'react'
import Base from 'lib/components/Base'

import './ap-navbar.scss'

export default class BSNavbarText extends Base {
	
	constructor(props) {
		super(props)
		this.baseClasses = [ 'ap-navbar-text' ]
		this.propsInfos = {
			required : {
				text: {}			
			},
			optionnal : {
				active: {},
				text: {},
				glyph: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.active) classes.push('active')
		return classes
	}

	render() {
		this.buildProps('NavbarText')
		return (
			<li className={this.className}>
				<p className='navbar-text ap-navbar-text-inner'>
					{this.props.glyph ? this._buildGlyph() : ''}
					{this.props.text}
				</p>
			</li>
		)
	}
}
