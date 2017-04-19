import React from 'react'
import Base from 'lib/components/Base'

import './ap-labels.css'

class BSLabel extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'label', 'ap-label' ]
		// Component properties
		this.propsInfos = {
			required : {				
			},
			optionnal : {
				children: { defaultValue: '' },
				bsStyle: { defaultValue: null },
				bold: { defaultValue: false },
				italic: { defaultValue: false }
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.bsStyle) {
			classes.push('label-' + this.props.bsStyle)	
		} else {
			classes.push('label-default')	
		}
		if (this.props.bold) {
			classes.push('label-bold')
		}
		if (this.props.italic) {
			classes.push('label-italic')
		}
		return classes
	}

	render() {
		this.buildProps('Label')
		return (
			<span className={this.className}>
				{this.props.children}
			</span>
		)
	}
}

export default BSLabel