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
			type: 'submit'
		}
		// Component properties
		this.propsInfos = {
			required : {
				onSubmit: { rename: 'onClick', store: this.buttonProps },
			},
			optionnal : {
				disabled: { defaultValue: false, store: this.buttonProps }
			}
		}
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