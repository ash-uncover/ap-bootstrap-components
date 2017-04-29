import React from 'react'
import ListGroup from './ListGroup'

import './ap-lists.css'

class BSListGroupLink extends ListGroup {
	
	constructor(props) {
		super(props)
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('ListGroupLink')
		return (
			<div className={this.className}>
				{this.props.children}
			</div>
		)
	}
}

export default BSListGroupLink