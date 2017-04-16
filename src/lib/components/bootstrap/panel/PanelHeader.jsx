import React from 'react'
import Base from 'lib/components/Base'

import './ap-panels.scss'

class BSPanelHeader extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'panel-heading', 'ap-panel-heading' ]
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
		this.buildProps('PanelHeader')
		return(
			<div className={this.className}>
				{this.props.children}
			</div>
		)
	}
}

export default BSPanelHeader