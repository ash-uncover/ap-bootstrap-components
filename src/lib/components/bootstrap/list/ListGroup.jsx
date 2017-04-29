import React from 'react'
import Base from 'lib/components/Base'

import './ap-lists.css'

class BSListGroup extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'list-group', 'ap-list-group' ]
		// Component properties
		this.propsInfos = {
			required : {				
			},
			optionnal : {
				children: { defaultValue: '' }
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('ListGroup')
		return (
			<ul className={this.className}>
				{this.props.children}
			</ul>
		)
	}
}

export default BSListGroup