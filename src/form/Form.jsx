import React from 'react'
import Base from 'Base'

class BSForm extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'ap-form' ]
		// Sub components properties
		this.formProps = { onSubmit: this._onSubmit }
		// Component properties
		this.propsInfos = {
			required : {
				children: {}
			},
			optionnal : {
				inline: { defaultValue: 'false' },
				horizontal: { defaultValue: 'false' },
				onSubmit: {}
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------

	_onSubmit(event) {
		event.preventDefault()
		if (this.props.onSubmit) {
			this.props.onSubmit()
		}
	}
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.inline) classes.push('form-inline')
		if (this.props.horizontal) classes.push('form-horizontal')
		return classes
	}

	render() {
		this.buildProps('BSForm')
		return (
			<form className={this.className} {...this.formProps}>
				{this.props.children}
			</form>
		)
	}
}

export default BSForm