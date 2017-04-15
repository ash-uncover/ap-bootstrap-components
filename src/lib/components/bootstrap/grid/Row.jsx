import React from 'react'
import Base from 'lib/components/Base'

import './ap-grid.scss'

class Row extends Base {

	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'row', 'ap-row' ]
		// Component properties
		this.propsInfos = {
			required : {},
			optionnal : {
				children: {}
			}
		}
	}
	
	render() { 
		this.buildProps('Row')
		return(
			<div className={this.className}>
				{this.props.children}
			</div>
	)}
}

export default Row