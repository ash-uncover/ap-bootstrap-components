import React from 'react'
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
// Custom components
import { ModalConfirm } from 'index'
import Base from 'Base'

import './ap-labels.css'

class Label extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'label' ]
		// Sub components properties
		this.classProps = { 
			label: true
		}
		// Component properties
		this.propsInfos = {
			required : {				
			},
			optionnal : {
				text: { defaultValue: '' },
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
		switch (this.props.bsStyle) {
			case 'default' : 
				classes.push('label-default')
				break
			case 'primary' : 
				classes.push('label-primary')
				break
			case 'success' : 
				classes.push('label-success')
				break
			case 'info' : 
				classes.push('label-info')
				break
			case 'warning' : 
				classes.push('label-warning')
				break
			case 'danger' : 
				classes.push('label-danger')
				break
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
				{this.props.text}
			</span>
		)
	}
}

export default Label
