import React from 'react'
import Base from 'Base'

class ListGroupItem extends Base {

	constructor(props) {
		super(props)
		// Sub components properties
		this.listGroupItemProps = { className: 'ap-list-group-item list-group-item' }
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				children: {}
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
		return(
			<li {...this.listGroupItemProps} >
				{this._buildContent()}
			</li>
		)
	}
}

export default ListGroupItem