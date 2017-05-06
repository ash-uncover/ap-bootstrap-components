import React from 'react'
import Base from 'lib/components/Base'

class BSFormCheckbox extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'checkbox', 'ap-form-checkbox' ]
		// Sub component props
		this.inputProps = {
			onChange: this.onChange.bind(this)
		}
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				text: {},
				onChange: {},
				defaultValue: { store: this.inputProps }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------
	
	onChange(event) {
		if (this.props.onChange) {
			this.props.onChange(event, event.target.value);
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	render() {
		this.buildProps('FormCheckbox')
		return (
			<div className={this.className}>
				<label>
					<input type='checkbox' {...this.inputProps} />
					{' ' + (this.props.text || '')}
				</label>
			</div>
		)
	}
}

export default BSFormCheckbox