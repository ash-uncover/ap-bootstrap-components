import React from 'react'
import Base from 'lib/components/Base'

import './ap-tables.scss'

class BSTableCell extends Base {

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
				children: {},
				onClick: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if(this.props.bsStyle) classes.push(this.props.bsStyle)
		return classes
	}

	render() {
		this.buildProps('TableCell')
		return (
			<td className={this.className} onClick={this.props.onClick}>
				{this.props.children}
			</td>
		)
	}
}

export default BSTableCell