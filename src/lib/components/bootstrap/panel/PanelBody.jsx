import React from 'react'
import Base from 'lib/components/Base'

import './ap-panels.scss'

class BSPanelBody extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'panel-body' ]
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
		this.buildProps('PanelBody')
		return(
			<div className={this.className}>
				{this.props.children}
			</div>
		)
	}
}

export default BSPanelBody