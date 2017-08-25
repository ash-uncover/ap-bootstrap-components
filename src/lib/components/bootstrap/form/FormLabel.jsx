import React from 'react'
import Base from 'lib/components/Base'

class BSFormLabel extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'ap-form-label', 'control-label' ]
		// Sub-component props
		this.containerProps = {}
		// Component props
		this.propsInfos = {
			required : {
				children: {}
			},
			optionnal : {
				htmlFor: { rename: 'htmlFor', store: this.containerProps }
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	render() {
		this.buildProps('FormLabel')
		return (
			<label className={this.className} {...this.containerProps}>
				{this.props.children}
			</label>
		)
	}
}
export default BSFormLabel