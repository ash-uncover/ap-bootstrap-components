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
				state: {}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	_buildClasses() {
		let classes = this.baseClasses.slice()
		switch (this.props.state) {
		case 'success': 
			return classes.push('has-success')
			
		case 'warning': 
			return classes.push('has-warning')
		case 'error': 
			return classes.push('has-error')
		}
		return classes
	}

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