import React from 'react'
import Base from 'lib/components/Base'

class BSFormInput extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'form-control-static', 'ap-form-static' ]
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				value: {}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	_buildClasses() {
		return this.baseClasses
	}

	render() {
		this.buildProps('FormStatic')
		return (
			<p className={this.className}>
				{this.props.value}
			</p>
		)
	}
}

export default BSFormInput