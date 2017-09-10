import React from 'react'
// Custom components
import Base from 'lib/components/Base'

import './ap-buttons.scss'

class BSButton extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'btn', 'ap-button' ]
		// Sub components properties
		this.buttonProps = { onClick: this.onClick.bind(this) }
		this.tooltipProps = {
			'data-toggle': 'tooltip'
		}
		// Component properties
		this.propsInfos = {
			required : {
				children: {}
			},
			optionnal : {
				bsSize: { defaultValue: '' },
				bsStyle: { defaultValue: 'default' },
				block: { defaultValue: false },
				active: { defaultValue: false },
				disabled: { defaultValue: false, store: this.buttonProps },
				onClick: {},
				type: { defaultValue: 'button', store: this.buttonProps },
                comp: {},
                href: {},
                value: {},
                tooltip: { rename: 'title', store: this.tooltipProps },
                tooltipPlacement: { rename: 'data-placement', defaultValue: 'top', store: this.tooltipProps }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------

	onClick(event) {
        if (!(this.props.comp === 'a' && this.props.href)) {
            event.preventDefault()
        }
		if (this.props.onClick) {
            this.props.onClick()
        }
	}
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.block) classes.push('btn-block')
		if (this.props.active) classes.push('active')
		if (this.props.bsSize) classes.push('btn-' + this.props.bsSize)
		if (this.props.bsStyle) classes.push('btn-' + this.props.bsStyle)
		return classes
	}

	render() {
		this.buildProps('Button')
		if (!this.props.tooltip) {
			this.tooltipProps = {}
		}
        if (this.props.comp === 'a') {
            delete this.buttonProps.type
            return (
                <a className={this.className} href={this.props.href} {...this.buttonProps} {...this.tooltipProps}>
                    {this.props.children}
                </a>
            )    
        }
        if (this.props.comp === 'input') {
            return (
                <input className={this.className} value={this.props.value} {...this.buttonProps} {...this.tooltipProps}>
                    {this.props.children}
                </input>
            )    
        }
		return (
            <button className={this.className} {...this.buttonProps} {...this.tooltipProps}>
                {this.props.children}
            </button>
        )
	}
}

export default BSButton