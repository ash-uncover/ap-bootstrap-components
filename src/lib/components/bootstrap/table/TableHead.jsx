import React from 'react'
import Base from 'lib/components/Base'

import './ap-tables.scss'

class BSTableHead extends Base {

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
		this.buildProps('TableHead')
		return (
			<thead className={this.className}>
				{this.props.children}
			</thead>
		)
	}
}

export default BSTableHead