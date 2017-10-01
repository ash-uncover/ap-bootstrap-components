import React from 'react'
import Base from 'lib/components/Base'

class BSFormTextArea extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'form-control', 'ap-form-textarea' ]
		// Sub component props
		this.textareaProps = {
			onChange: this.onChange.bind(this)
		}
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				rows: { defaultValue: 5, store: this.textareaProps },
				placeholder: { store: this.textareaProps },
				value: { defaultValue: '', store: this.textareaProps },
				onChange: {}
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
		this.buildProps('FormTextArea')
		return (
			<textarea 
				className={this.className} 
				{...this.textareaProps} />
		)
	}
}

export default BSFormTextArea