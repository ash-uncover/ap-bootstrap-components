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
	
	buildFormValue (value, index) {
		return (
			<li key={index}>
				{value}
			</li>
		)
	}

	render() {
		this.buildProps('FormStatic')
		if (Array.isArray(this.props.children) && this.props.children.length > 1) {
			return (
				<ul className={this.className}>
					{this.props.children.map(this.buildFormValue)}
				</ul>
			)
		} 
		return (
			<p className={this.className}>
				{this.props.children}
			</p>
		)
	}
}

export default BSFormStatic