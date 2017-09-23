import React from 'react'
import './Modal.scss'

import Base from 'lib/components/Base'

class Modal extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'ap-modal' ]
		// Component properties
		this.propsInfos = {
			required : {
				children: {}
			},
			optionnal : {
				show: { defaultValue: false }
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.show) classes.push('ap-modal-show')
		return classes
	}

	render() {
		this.buildProps('Modal')
		return (
			<div className={this.className}>
				{this.props.children}
			</div>
		)
	}

}
export default Modal
