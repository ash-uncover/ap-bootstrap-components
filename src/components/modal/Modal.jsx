import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'index'
import Base from 'components/Base'

class APModal extends Base {

	constructor(props) {
		super(props);
		// Sub components properties
		this.headerProps = {}
		this.bodyProps = {}
		this.modalProps = { className: 'ap-modal' }
		this.confirmButtonProps = { className: 'ap-modal-confirm' }
		this.cancelButtonProps = { className: 'ap-modal-cancel' }
		// Component properties
		this.propsInfos = {
			required : {
				confirmCallback: { rename: 'onClick', store: this.confirmButtonProps },
				cancelCallback: { rename: 'onClick', store: this.cancelButtonProps }
			},
			optionnal : {
				show: { defaultValue: false, store: this.modalProps },

				title: { defaultValue: 'Etes-vous sûr ?', store: this.headerProps },
				children: { defaultValue: '', store: this.bodyProps },

				confirmDisabled: { defaultValue: false, rename: 'disabled', store: this.confirmButtonProps },
				confirmText: { defaultValue: 'Confirmer', rename: 'children', store: this.confirmButtonProps },
				confirmStyle: { defaultValue: 'success', rename: 'bsStyle', store: this.confirmButtonProps },
				
				cancelText: { defaultValue: 'Annuler', rename: 'children', store: this.cancelButtonProps },
				cancelStyle: { rename: 'bsStyle', store: this.cancelButtonProps }
			}
		}
	}


	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() { 
		this.buildProps('Modal')
		return (
			<Modal {...this.modalProps} >
				<Modal.Header>
					<Modal.Title>{this.headerProps.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body {...this.bodyProps} />
				<Modal.Footer>
					<Button {...this.confirmButtonProps} />
					<Button {...this.cancelButtonProps} />
				</Modal.Footer>
			</Modal>
		);
	}
}

export default APModal
