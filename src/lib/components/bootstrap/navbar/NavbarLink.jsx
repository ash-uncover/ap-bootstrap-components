import React from 'react'
import Base from 'lib/components/Base'

import './ap-navbar.scss'

export default class BSNavbarLink extends Base {
	
	constructor(props) {
		super(props)
		this.baseClasses = [ 'ap-navbar-link' ]
		this.propsInfos = {
			required : {
				link: {}				
			},
			optionnal : {
				active: {},
				onNavigate: {},
				text: {},
				glyph: {},
				disabled: { defaultValue: false }
			}
		}
	}

	onNavigate() {
		if (!this.props.disabled && this.props.onNavigate) {
			this.props.onNavigate(this.props.link)
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.active) classes.push('active')
		if (this.props.disabled) classes.push('disabled')
		return classes
	}

	render() {
		this.buildProps('NavbarLink')
		return (
			<li className={this.className} onClick={this.props.onNavigate ? this.onNavigate.bind(this) : null}>
				<a href={this.props.onNavigate ? null : this.props.link}>
					{this.props.glyph ? this._buildGlyph() : ''}
					{this.props.text}
				</a>
			</li>
		)
	}
}
