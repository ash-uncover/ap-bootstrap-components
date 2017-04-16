import React from 'react'
import Base from 'lib/components/Base'

import './ap-tables.scss'

class BSTableBody extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = []
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				children: {}
			}
		}
	}

	render() {
		this.buildProps('TableBody')
		return (
			<tbody className={this.className}>
				{this.props.children}
			</tbody>
		)
	}
}

export default BSTableBody