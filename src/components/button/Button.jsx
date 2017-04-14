import React from 'react'
// Custom components
import Base from 'components/Base'

import './ap-buttons.scss'

class BSButton extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'btn', 'ap-button' ]
		// Sub components properties
		this.buttonProps = { onClick: this.onClick.bind(this) }
		// Component properties
		this.propsInfos = {
			required : {
				children: {}
			},
			optionnal : {
				bsSize: { defaultValue: '' },
				bsStyle: { defaultValue: 'default' },
				block: { defaultValue: false },
				disabled: { defaultValue: false, store: this.buttonProps },
				onClick: {},
				type: { defaultValue: 'button', store: this.buttonProps }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------

	onClick(e) {
		e.preventDefault()
		if (this.props.onClick) {
            this.props.onClick()
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
		this.buildProps('Button')
		return (
            <button className={this.className} {...this.buttonProps}>
                {this.props.children}
            </button>
        )
	}
}

export default BSButton