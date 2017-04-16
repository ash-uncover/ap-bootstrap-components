import React from 'react'
import Base from 'lib/components/Base'

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
		if (this.props.bsStyle) {
			classes.push('panel-' + this.props.bsStyle)
		} else {
			classes.push('panel-default')
		}
		return classes
	}
	
	render() {
		this.buildProps('Panel')
		return(
			<div className={this.className}>
				{this.props.children}
			</div>
		)
	}
}

export default BSPanel