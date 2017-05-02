import React from 'react'
import Base from 'lib/components/Base'

class BSForm extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'ap-form' ]
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				children: {}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	render() {
		this.buildProps('Form')
		return (
			<form className={this.className}>
				{this.props.children}
			</form>
		)
	}
}
export default BSForm