import React from 'react'
// Custom components
import Base from 'Base'

import './ap-buttons.scss'

class BSButtonInput extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'btn', 'btn-file', 'ap-button-input' ]
		// Sub components properties
		this.spanProps = {}
		this.inputProps = {}
		// Component properties
		this.propsInfos = {
			required : {
				value: { store: this.inputProps }
			},
			optionnal : {
				bsSize: { defaultValue: '' },
				bsStyle: { defaultValue: 'default' },
				block: { defaultValue: false },
				disabled: { defaultValue: false, store: this.spanProps },
				onChange: { store: this.inputProps },
				type: { defaultValue: 'button', store: this.inputProps }
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.block) classes.push('btn-block')
		if (this.props.bsSize) classes.push('btn-' + this.props.bsSize)
		if (this.props.bsStyle) classes.push('btn-' + this.props.bsStyle)
		return classes
	}

	render() {
		this.buildProps('ButtonInput')
		return (
			<span className={this.className} {...this.spanProps}>
				Browse <input type='file' {...this.inputProps} />
			</span>
		)
	}
}

export default BSButtonInput
