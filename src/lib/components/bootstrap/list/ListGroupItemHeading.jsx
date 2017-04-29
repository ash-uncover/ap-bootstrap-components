import React from 'react'
import Base from 'lib/components/Base'

import './ap-lists.css'

class BSListGroupItemHeading extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'list-group-item-heading', 'ap-list-group-item-heading' ]
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
		this.buildProps('ListGroupItemHeading')
		return (
			<h4 className={this.className}>
				{this.props.children}
			</h4>
		)
	}
}

export default BSListGroupItemHeading