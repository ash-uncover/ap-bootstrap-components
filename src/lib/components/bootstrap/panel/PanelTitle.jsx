import React from 'react'
import Base from 'lib/components/Base'

import './ap-panels.scss'

class BSPanelTitle extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'panel-title', 'ap-panel-title' ]
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				level: { defaultValue: 'h3' },
				children: {}
			}
		}
	}

	render() {
		this.buildProps('PanelTitle')
		switch(this.props.level) {
		case 'h1': return <h1 className={this.className}>{this.props.children}</h1>
		case 'h2': return <h2 className={this.className}>{this.props.children}</h2>
		case 'h3': return <h3 className={this.className}>{this.props.children}</h3>
		case 'h4': return <h4 className={this.className}>{this.props.children}</h4>
		case 'h5': return <h5 className={this.className}>{this.props.children}</h5>
		case 'h6': return <h6 className={this.className}>{this.props.children}</h6>
		default:   return <h3 className={this.className}>{this.props.children}</h3>
		}
	}
}

export default BSPanelTitle