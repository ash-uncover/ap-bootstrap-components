import React from 'react'
import Base from 'lib/components/Base'

import './ap-forms.scss'

class BSFormSwitch extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'checkbox', 'ap-form-switch' ]
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
				value: { store: this.inputProps, rename: 'checked' }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------
	
	onChange(event) {
		if(this.props.onChange) {
			this.props.onChange(event, event.target.checked);
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
					<input 
						type='checkbox' 
						className='ap-form-switch-checkbox' 
						onChange={this.onChange}
						{...this.inputProps} />
				</label>
			</div>
		)
	}
}

export default BSFormSwitch