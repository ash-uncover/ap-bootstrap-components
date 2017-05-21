import React from 'react'
import Base from 'lib/components/Base'

class BSFormInput extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'form-control', 'ap-form-input' ]
		// Sub component props
		this.inputProps = {}
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				id: { store: this.inputProps },
				type: { defaultValue: 'text', store: this.inputProps },
				placeholder: { store: this.inputProps },
				onChange: { store: this.inputProps, value: this.onChange.bind(this) },
				value: { rename: 'defaultValue', store: this.inputProps }
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
	
	_buildClasses() {
		if (this.props.type === 'file') {
			return []
		}
		return this.baseClasses
	}

	render() {
		this.buildProps('FormInput')
		return (
			<input ref='input' className={this.className} {...this.inputProps} />
		)
	}
}

export default BSFormInput