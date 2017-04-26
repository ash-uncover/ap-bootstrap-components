import React from 'react'
import Base from 'lib/components/Base'

import './ap-grid.scss'

class Container extends Base {

	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'ap-container' ]
		// Component properties
		this.propsInfos = {
			required : {},
			optionnal : {
                fluid: { defaultValue: false },
				children: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
        classes.push(this.props.fluid ? 'container-fluid' : 'container')
		return classes
	}
	
	render() { 
		this.buildProps('Container')
		return(
			<div className={this.className}>
				{this.props.children}
			</div>
	)}
}

export default Container