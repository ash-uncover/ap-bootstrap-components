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
			classes.push('has-success')			
			break
		case 'warning': 
			classes.push('has-warning')
			break
		case 'error': 
			classes.push('has-error')
			break
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