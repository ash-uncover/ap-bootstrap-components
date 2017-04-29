import React from 'react'
import ListGroupItem from './ListGroupItem'

import './ap-lists.css'

class BSListGroupButtonItem extends ListGroupItem {
	
	constructor(props) {
		super(props)
		// Component properties
		this.propsInfos.optionnal.onClick = {}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('ListGroupButtonItem')
		return (
			<button type='button' className={this.className} href={this.props.href || '#'}>
				{this.props.children}
			</button>
		)
	}
}

export default BSListGroupButtonItem