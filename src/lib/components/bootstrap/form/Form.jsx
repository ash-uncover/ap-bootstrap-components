import React from 'react'
import Base from 'lib/components/Base'

class BSForm extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'ap-form' ]
		// Sub-component props
		this.formProps = {}
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				horizontal: {},
				onSubmit: { store: this.formProps },
				children: {}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.horizontal) classes.push('form-horizontal')
		return classes
	}

	render() {
		this.buildProps('Form')
		return (
			<form className={this.className} {...this.formProps}>
				{this.props.children}
			</form>
		)
	}
}
export default BSForm