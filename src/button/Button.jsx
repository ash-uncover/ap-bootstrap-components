import React from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
// Custom components
import { ModalConfirm } from 'index'
import Base from 'Base'

import './ap-buttons.scss'

class BSButton extends Base {
	
	constructor(props) {
		super(props)
		this.state = { showConfirm: false }
		// Base class
		this.baseClasses = [ 'btn', 'ap-button' ]
		// Sub components properties
		this.buttonProps = { onClick: this.onClick.bind(this) }
		this.overlayProps = {}
		this.tooltipProps = { id: 'tooltip' }
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
				confirm: {},
				tooltip: { rename: 'children', store: this.tooltipProps },
				tooltipPlacement: { defaultValue: 'top', rename: 'placement', store: this.overlayProps },
				type: { defaultValue: 'button', store: this.buttonProps }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------

	onClick(e) {
		e.preventDefault()
		if (this.props.confirm) {
			this.setState({ showConfirm: true })
		} else {
			this._onEffectiveClick()
		}
	}

	onConfirm() {
		this._onEffectiveClick()
		this.onCancel()
	}

	onCancel() {
		this.setState({ showConfirm: false })
	}

	_onEffectiveClick() {
		if (this.props.onClick) {
			this.props.onClick()
		}
	}
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildOverlay(content) {
		return (
			<OverlayTrigger overlay={this.__buildTooltip()} {...this.overlayProps}>
				{content}
			</OverlayTrigger>
		)
	}

	__buildTooltip() {
		return (
			<Tooltip {...this.tooltipProps}>
				{this.props.tooltip}
			</Tooltip>
		)
	}

	_buildButton() {
		return (
			<button className={this.className} {...this.buttonProps}>
				{this.props.children}
				{this.props.confirm ?
					<ModalConfirm 
						show={this.state.showConfirm}
						confirmCallback={this.onConfirm.bind(this)} 
						cancelCallback={this.onCancel.bind(this)}
						{...this.props.confirm} />
				: '' }
			</button>
		)
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.block) classes.push('btn-block')
		if (this.props.bsSize) classes.push('btn-' + this.props.bsSize)
		if (this.props.bsStyle) classes.push('btn-' + this.props.bsStyle)
		return classes
	}

	render() {
		this.buildProps('Button')
		let button = this._buildButton()
		if (this.props.tooltip) {
			return this._buildOverlay(button)
		}
		return button
	}
}

export default BSButton
