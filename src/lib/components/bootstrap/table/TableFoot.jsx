import React from 'react'
import Base from 'lib/components/Base'

import './ap-tables.scss'

class BSTableFoot extends Base {

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
		this.buildProps('TableFoot')
		return (
			<tfoot className={this.className}>
				{this.props.children}
			</tfoot>
		)
	}
}

export default BSTableFoot