import React from 'react'
// Custom components
import { Button } from 'index'
import Base from 'Base'

import './ap-buttons.scss'

class BSButtonGroup extends Base {
	
	constructor(props) {
		super(props)
		//
		this.baseClasses = [ 'btn-group', 'ap-button-group' ]
		// Sub components properties
		this.buttonGroupProps = { 
			role: 'group'
		}
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				buttons: { defaultValue: [] }
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildButtons() {
		return (this.props.buttons || []).map(this.__buildButton.bind(this));
	}

	__buildButton(button, index) {
		return (
			<Button key={index} {...button} />
		)
	}

	render() {
		this.buildProps('ButtonGroup')
		return (
			<div className={this.className} {...this.buttonGroupProps} >
				{this._buildButtons()}
			</div>
		)
	}
}
export default BSButtonGroup
