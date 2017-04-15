import React from 'react'
import Base from 'lib/components/Base'

import './ap-panels.scss'

class BSPanel extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'panel', 'ap-panel' ]
		// Sub components properties
		this.bodyProps = { className: 'panel-body' }
		this.headerProps = { className: 'panel-heading' }
		this.footerProps = { className: 'panel-footer' }
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				bsStyle: { defaultValue: 'default' },
				header: { rename: 'children', store: this.headerProps },
				footer: { rename: 'children', store: this.footerProps },
				children: { rename: 'children', store: this.bodyProps }
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
				{this.props.header ? <div {...this.headerProps} /> : '' }
				{this.props.children ? <div {...this.bodyProps} /> : '' }
				{this.props.footer ? <div {...this.footerProps} /> : '' }
			</div>
		)
	}
}

export default BSPanel