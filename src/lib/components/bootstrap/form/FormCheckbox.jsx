import React from 'react'
import Base from 'lib/components/Base'

class BSFormCheckbox extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'checkbox', 'ap-form-checkbox' ]
		// Sub component props
		this.inputProps = {}
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				text: {},
				onChange: { store: this.inputProps, value: this.onChange.bind(this) },
				defaultValue: { store: this.inputProps }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------
	
	onChange(event) {
		if  (this.props.onChange) {
			this.props.onChange(event, event.target.value, this.props.name, this.validInput(event.target.value));
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	render() {
		this.buildProps('FormCheckbox')
		return (
			<div className={this.className}>
				<label>
					{ this.props.text && this.props.checkboxAfter ? this.props.text + ' ' : '' }
					<input type='checkbox' {...this.inputProps} />
					{ this.props.text ? ' ' + this.props.text : '' }
				</label>
			</div>
		)
	}
}

export default BSFormCheckbox