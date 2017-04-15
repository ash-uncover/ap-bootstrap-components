import React from 'react'
import Base from 'lib/components/Base'

import './ap-panels.scss'

class BSPanelFooter extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'panel-footer' ]
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
		this.buildProps('PanelFooter')
		return(
			<div className={this.className}>
				{this.props.children}
			</div>
		)
	}
}

export default BSPanelFooter