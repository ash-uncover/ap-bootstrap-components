import React from 'react'
import Base from 'lib/components/Base'

import './ap-tables.scss'

class BSTableHeaderCell extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = []
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				bsStyle: {},
children: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if(this.props.bsStyle) classes.push(this.props.bsStyle)
		return classes
	}

	render() {
		this.buildProps('TableHeaderCell')
		return (
			<th className={this.className}>
				{this.props.children}
			</th>
		)
	}
}

export default BSTableHeaderCell