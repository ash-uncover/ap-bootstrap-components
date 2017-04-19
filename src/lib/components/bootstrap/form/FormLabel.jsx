import React from 'react'
import Base from 'lib/components/Base'

class BSFormLabel extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'ap-form-label' ]
		// Sub components properties
		this.labelProps = {}
		// Component properties
		this.propsInfos = {
			required : {
				children: {}
			},
			optionnal : {
				for: { store: this.labelProps }
			}
		}
	}


	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('FormLabel')
		return (
			<label className={this.className} {...this.labelProps}>
				{this.props.children}
			</label>
		)
	}
}
export default BSFormLabel