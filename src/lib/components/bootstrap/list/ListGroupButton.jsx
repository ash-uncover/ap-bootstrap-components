import React from 'react'
import ListGroup from './ListGroup'

import './ap-lists.css'

class BSListGroupButton extends ListGroup {
	
	constructor(props) {
		super(props)
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('ListGroupButton')
		return (
			<div className={this.className}>
				{this.props.children}
			</div>
		)
	}
}

export default BSListGroupButton