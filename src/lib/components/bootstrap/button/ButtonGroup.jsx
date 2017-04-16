import React from 'react'
// Custom components
import { Button } from 'lib/exports'
import Base from 'lib/components/Base'

import './ap-buttons.scss'

class BSButtonGroup extends Base {
	
	constructor(props) {
		super(props)
		//
		this.baseClasses = [ 'ap-button-group' ]
		// Sub components properties
		this.buttonGroupProps = {}
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				children: {},
				role: { defaultValue: 'group', store: this.buttonGroupProps }
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = this.baseClasses.slice()
		classes.push('btn-' + this.buttonGroupProps.role)
		return classes
	}

	render() {
		this.buildProps('ButtonGroup')
		return (
			<div className={this.className} {...this.buttonGroupProps} >
				{this.props.children}
			</div>
		)
	}
}
export default BSButtonGroup