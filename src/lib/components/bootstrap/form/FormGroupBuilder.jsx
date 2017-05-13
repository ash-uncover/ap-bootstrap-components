import React from 'react'
import Base from 'lib/components/Base'

import { FormGroup, FormLabel, FormInput, Col } from 'lib/exports'

class BSFormGroupBuilder extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = []
		// Component props
		this.propsInfos = {
			required : {
				type: {}
			},
			optionnal : {
				id: {},
				label: {},
				labelXs: {},
				labelSm: {},
				labelMd: {},
				labelLg: {}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	_buildLabel() {
		let labelClass = 'control-label'
		if (this.props.labelXs) labelClass += ' col-xs-' + this.props.labelXs
		if (this.props.labelSm) labelClass += ' col-sm-' + this.props.labelSm
		if (this.props.labelMd) labelClass += ' col-md-' + this.props.labelMd
		if (this.props.labelLg) labelClass += ' col-lg-' + this.props.labelLg
		return (
			<FormLabel className={labelClass} htmlFor={this.props.id}>
				{this.props.label}
			</FormLabel>
		)
	}

	_buildFormControl() {
		let controlContainerProps = {
			xs: this.props.labelXs ? 12 - this.props.labelXs : null,
			sm: this.props.labelSm ? 12 - this.props.labelSm : null,
			md: this.props.labelMd ? 12 - this.props.labelMd : null,
			lg: this.props.labelLg ? 12 - this.props.labelLg : null,
			xsOffset: this.props.labelXs && !this.props.label ? this.props.labelXs : null,
			smOffset: this.props.labelSm && !this.props.label ? this.props.labelSm : null,
			mdOffset: this.props.labelMd && !this.props.label ? this.props.labelMd : null,
			lgOffset: this.props.labelLg && !this.props.label ? this.props.labelLg : null
		}
		switch (this.props.type) {
			case 'input': return (
				<Col {...controlContainerProps}>
					<FormInput 
						id={this.props.id}
						type={this.props.inputType}
						placeholder={this.props.placeholder}
						onChange={this.props.onChange}
						value={this.props.value} />
				</Col>
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