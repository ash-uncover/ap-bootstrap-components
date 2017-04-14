import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'index'
import Base from 'components/Base'

class ModalConfirm extends Base {

	constructor(props) {
		super(props);
		// Sub components properties
		this.headerProps = {}
		this.bodyProps = {}
		this.modalProps = { className: 'ap-modal ap-modal-confirm' }
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
				body: { defaultValue: '', store: this.bodyProps },

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
		this.buildProps('ModalConfirm')
		return (
			<Modal {...this.modalProps} >
				<Modal.Header>
					<Modal.Title>{this.headerProps.title}</Modal.Title>
				</Modal.Header>
				{this.bodyProps.body ? 
				<Modal.Body>
					{this.bodyProps.body}
				</Modal.Body>
				: '' }
				<Modal.Footer>
					<Button {...this.confirmButtonProps} />
					<Button {...this.cancelButtonProps} />
				</Modal.Footer>
			</Modal>
		);
	}
}

export default ModalConfirm;
