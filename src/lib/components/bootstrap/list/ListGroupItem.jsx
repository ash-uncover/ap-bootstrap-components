import React from 'react'
import Base from 'lib/components/Base'

import './ap-lists.css'

class BSListGroupItem extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'list-group-item', 'ap-list-group-item' ]
		// Component properties
		this.propsInfos = {
			required : {				
			},
			optionnal : {
				children: { defaultValue: '' },
				disabled: { defaultValue: false },
				active: { defaultValue: false },
				bsStyle: { defaultValue: 'default' }
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = super._buildClasses();
		if (this.props.disabled) {
			classes.push('disabled')
		}
		if (this.props.active) {
			classes.push('active')
		}
		if (this.props.bsStyle) {
			classes.push('list-group-item-' + this.props.bsStyle)
		}
		return classes
	}

	render() {
		this.buildProps('ListGroupItem')
		return (
			<li className={this.className}>
				{this.props.children}
			</li>
		)
	}
}

export default BSListGroupItem