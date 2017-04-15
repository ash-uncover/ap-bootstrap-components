import React from 'react'
import Base from 'lib/components/Base'

import { PanelHeader, PanelBody, PanelFooter } from 'lib/exports'

import './ap-panels.scss'

class BSPanel extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'panel', 'ap-panel' ]
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				bsStyle: { defaultValue: 'default' },
				children: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.bsStyle) classes.push('panel-' + this.props.bsStyle)
		return classes
	}
	
	render() {
		this.buildProps('Panel')
		return(
			<div className={this.className} {...this.containerProps} >
				{this.props.children}
			</div>
		)
	}
}

export default BSPanel