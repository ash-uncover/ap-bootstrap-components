import React from 'react'
import Base from 'lib/components/Base'

class BSFormStatic extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'form-control-static', 'ap-form-static' ]
		// Component props
		this.propsInfos = {
			required : {
				children: {}
			},
			optionnal : {
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	render() {
		this.buildProps('FormStatic')
		return (
			<p className={this.className}>
				{this.props.children}
			</p>
		)
	}
}

export default BSFormStatic