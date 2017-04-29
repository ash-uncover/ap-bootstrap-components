import React from 'react'
import Base from 'lib/components/Base'
import ListGroupItem from './ListGroupItem'

import './ap-lists.css'

class BSListGroupLinkItem extends ListGroupItem {
	
	constructor(props) {
		super(props)
		// Component properties
		this.propsInfos.optionnal.href = { defaultValue: '' }
		this.propsInfos.optionnal.active =  { defaultValue: false }
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = super._buildClasses();
		if (this.props.active) {
			classes.push('active')
		}
		return classes
	}

	render() {
		this.buildProps('ListGroupLinkItem')
		return (
			<a className={this.className} href={this.props.href || '#'}>
				{this.props.children}
			</a>
		)
	}
}

export default BSListGroupLinkItem