import React from 'react'
import Base from 'components/Base'

class Container extends Base {

	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = []
		// Component properties
		this.propsInfos = {
			required : {},
			optionnal : {
                fuild: {defaultValue: false },
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