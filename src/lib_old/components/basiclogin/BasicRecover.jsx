import React from 'react'
// Data module
import RecoverData from 'data/RecoverData'
// Custom components
import Base from 'Base'
import { Col, Panel, FormInput, LayoutColumn, Button } from 'index'
// Utils modules
import Validators from 'utils/form/Validators'

class BasicRecover extends Base {

	constructor(props) {
		super(props)
		this.state = {
			email: '',
			emailValid: false
		}
		// Sub components props
		this.panelProps = {
			footer: ' '
		}
		this.emailFieldProps = {
			name: 'email',
			type: 'email',
			onChange: this._onEmailChanged.bind(this),
			validator: Validators.Email
		}
		this.cancelButtonProps = {
			block: true,
			children: 'Annuler',
			bsStyle: 'primary',
			bsSize: 'large'
		}
		this.submitButtonProps = {
			block: true,
			children: 'Changer le mot de passe',
			bsStyle: 'warning',
			bsSize: 'large',
			onClick: this._onSubmit.bind(this)
		}
		// Component props
		this.propsInfos = {
			required : {
				onCancel: { rename: 'onClick', store: this.cancelButtonProps },
				onSubmit: {}
			},
			optionnal : {
				title: { defaultValue: 'Changer mot de passe', rename: 'header', store: this.panelProps },
				emailLabel: { defaultValue: 'Veuillez saisir votre adresse électronique', rename: 'label', store: this.emailFieldProps },
				emailPlaceholder: { defaultValue: 'Adresse électronique', rename: 'placeholder', store: this.emailFieldProps }
			}
		}
	}


	// View Callbacks //
	// --------------------------------------------------------------------------------

	_onEmailChanged(_, value, x, isValid) {
		this.setState({ 
			email: value,
			emailValid: isValid
		})
	}

	_onSubmit() {
		this.props.onSubmit({
			email: this.state.email
		})
	}

	// Rendering functions //
	// --------------------------------------------------------------------------------

	_checkSubmitButtonState() {
		let disabled = !this.state.emailValid
		this.submitButtonProps.disabled = disabled
		this.submitButtonProps.bsStyle = disabled ? 'default' : 'warning'
	}

	render() { 
		this.buildProps('BasicRecover')
		this._checkSubmitButtonState()
		return (
			<Panel {...this.panelProps}>
				<FormInput {...this.emailFieldProps} />
				<br/>
				<Col xs={12}>
					<LayoutColumn>
						<Button {...this.cancelButtonProps} />
						<Button {...this.submitButtonProps} />
					</LayoutColumn>
				</Col>
			</Panel>
		)
	}
}
export default BasicRecover