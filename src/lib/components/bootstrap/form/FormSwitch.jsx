import React from 'react'
import Base from 'lib/components/Base'

import './ap-forms.scss'

class BSFormSwitch extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'checkbox', 'ap-form-switch' ]
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
		this.buildProps('FormSwitch')
		return (
			<div className={this.className}>
				<label>
					{this.props.text}
					<input type='checkbox' className='ap-form-switch-checkbox' {...this.inputProps} />
				</label>
			</div>
		)
	}
}

export default BSFormSwitch