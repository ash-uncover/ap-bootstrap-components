import React from 'react'
import Base from 'Base'

class LinkedListGroupItem extends Base {

	constructor(props) {
		super(props)
		// Sub components properties
		this.listGroupItemProps = {}
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				children: {},
				href: { store: this.listGroupItemProps },
				onClick: { store: this.listGroupItemProps },
				active: { defaultValue: false, store: this.listGroupItemProps }
			}
		}
	}
	

	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildContent() {
		return this.props.children
	}

	render() { 
		this.buildProps('ListGroupItem')
		if (this.props.active) {
			this.listGroupItemProps.className = 'list-group-item active'
		} else {
			this.listGroupItemProps.className = 'list-group-item'
		}
		return(
			<a {...this.listGroupItemProps} >
				{this._buildContent()}
			</a>
		)
	}
}

export default LinkedListGroupItem