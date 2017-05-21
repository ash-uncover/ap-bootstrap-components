import React from 'react'
import Base from 'lib/components/Base'

class BSFormBoolean extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'selectpicker', 'form-control', 'ap-form-select' ]
		// Sub component props
		this.inputProps = {}
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				id: { store: this.inputProps },
				onChange: { store: this.inputProps, value: this.onChange.bind(this) },
				defaultValue: { store: this.inputProps }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------
	
	onChange(event) {
		if (this.props.onChange) {
			let value = false
			if (event.target.value == 'true')
				value = true
			this.props.onChange(event, value);
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('FormSelect')
		return (
			<select className={this.className} {...this.inputProps}>
				<option key='true' value={true}>true</option>
				<option key='false' value={false}>false</option>
			</select>
		)
	}
}

export default BSFormBoolean