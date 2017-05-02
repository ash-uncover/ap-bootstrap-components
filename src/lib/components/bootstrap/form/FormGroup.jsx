import React from 'react'
import Base from 'lib/components/Base'

class BSFormGroup extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'form-group', 'ap-form-group' ]
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
		this.buildProps('FormGroup')
		return (
			<div className={this.className}>
				{this.props.children}
			</div>
		)
	}
}
export default BSFormGroup