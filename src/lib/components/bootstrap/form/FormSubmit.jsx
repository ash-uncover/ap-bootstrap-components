import React from 'react'
import Base from 'lib/components/Base'

import './ap-forms.scss'

class BSFormSubmit extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'ap-form-submit' ]
		// Sub components properties
		this.buttonProps = { 
			type: 'submit',
			onClick: this.onClick.bind(this)
		}
		// Component properties
		this.propsInfos = {
			required : {
				onSubmit: {},
			},
			optionnal : {
				disabled: { defaultValue: false, store: this.buttonProps }
			}
		}
	}

	// View callbacks //
	// --------------------------------------------------------------------------------

	onClick(event) {
		event.preventDefault()
		this.props.onSubmit && this.props.onSubmit()
	}
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('FormSubmit')
		return (
            <button className={this.className} {...this.buttonProps} />
        )
	}
}

export default BSFormSubmit