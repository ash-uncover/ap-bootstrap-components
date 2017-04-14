import React from 'react'
import Base from 'Base'
import { LinkContainer } from 'react-router-bootstrap'
import { Glyphicon } from 'index'

export default class BSNavbarLink extends Base {
	
	constructor(props) {
		super(props)
		this.propsInfos = {
			required : {
				link: {},
				onNavigate: {}
			},
			optionnal : {
				active: { },
				text: { },
				glyph: { },
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
		let clazz = 'ap-navbar-item ap-navbar-link'
		if (this.props.active) {
			clazz += ' active'
		}
		return clazz
	}

	_buildGlyph() {

	}

	render() {
		this.buildProps('NavbarLink')
		return (
			<a className={this._buildClasses()} onClick={this.onNavigate.bind(this)}>
				{this.props.glyph ? this._buildGlyph() : ''}
				{this.props.text}
			</a>
		)
	}
}
