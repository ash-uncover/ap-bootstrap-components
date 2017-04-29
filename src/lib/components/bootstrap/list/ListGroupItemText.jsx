import React from 'react'
import Base from 'lib/components/Base'

import './ap-lists.css'

class BSListGroupItemText extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'list-group-item-text', 'ap-list-group-item-text' ]
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
		this.buildProps('ListGroupItemText')
		return (
			<p className={this.className}>
				{this.props.children}
			</p>
		)
	}
}

export default BSListGroupItemText