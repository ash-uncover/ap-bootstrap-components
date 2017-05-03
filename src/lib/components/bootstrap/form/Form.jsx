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
				onSubmit: { store: this.formProps },
				children: {}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
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