import React from 'react'
import Base from 'lib/components/Base'

import './ap-grid.scss'

class Clearfix extends Base {

	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'clearfix', 'ap-clearfix' ]
		// Component properties
		this.propsInfos = {
			required : {},
			optionnal : {}
		}
	}
	
	render() { 
		this.buildProps('Clearfix')
		return(
			<div className={this.className} />
	)}
}

export default Clearfix