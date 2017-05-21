import React from 'react'
import Base from 'lib/components/Base'

import { FormGroup, FormLabel, FormInput, FormSelect, Col } from 'lib/exports'

class BSFormGroupBuilder extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = []
		// Component props
		this.propsInfos = {
			required : {
				type: {},
				data: {}
			},
			optionnal : {
				label: {}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	_buildLabel() {
		let labelClass = 'control-label'
		return (
			<FormLabel className={labelClass} htmlFor={this.props.id}>
				{this.props.label}
			</FormLabel>
		)
	}

	_buildFormControl() {
		switch (this.props.type) {
			case 'input': 
				return (
					<FormInput {...this.props.data} />
				)
			case 'select': 
				return (
					<FormSelect {...this.props.data} />
				)
			default: return (
				<div>Unsupported type: '{this.props.type}'</div>
			)
		}
	}

	render() {
		this.buildProps('FormGroupBuilder')
		return (
			<FormGroup className={this.className}>
			{ this.props.label ?
				this._buildLabel()
			: '' }
				{this._buildFormControl()}
			</FormGroup>
		)
	}
}
export default BSFormGroupBuilder