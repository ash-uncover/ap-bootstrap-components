import React from 'react'
import Base from 'Base'

import { ListGroupItem } from 'index';

class ListGroup extends Base {

	constructor(props) {
		super(props)
		// Sub components properties
		this.listGroupProps = { className: 'ap-list-group list-group' }
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				items: {},
				children: {}
			}
		}
	}


	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildContent() {
		if (this.props.children && this.props.items) {
			return (<p>ERROR: cannot not specify both 'items' and 'children'</p>)
		}
		if (this.props.children) {
			return this.props.children
		}
		return (this.props.items || []).map(function(item, index) {
			return (<ListGroupItem key={'li-' + index} {...item} />)
		})
	}

	render() {
		this.buildProps('ListGroup')
		return(
			<ul {...this.listGroupProps}>
				{this._buildContent()}
			</ul>
		)
	}
}

export default ListGroup
