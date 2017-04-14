import React from 'react'
import Base from 'Base'
// Custom components
import { Panel, Col, LayoutColumn, Form, FormInput, Button } from 'index'
// Utils
import Validators from 'utils/form/Validators'

import './ap-basic-auth.css'

class BasicRegistration extends Base {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			passwordConfirm: '',
			captcha: ''
		}
		// Sub components
		this.containerProps = {
			smOffset: 1, 
			sm: 10, 
			mdOffset: 2, 
			md: 8 
		}
		this.panelProps = {
			footer: ' '
		}
		this.errorDivProps = {
			className: 'ap-register-error'
		}
		this.usernameFieldProps = {
			name: 'user',
			type: 'email',
			onChange: this._onUsernameChanged.bind(this)
		}
		this.passwordFieldProps = {
			name: 'pass',
			type: 'password',
			onChange: this._onPasswordChanged.bind(this)
		}
		this.passwordConfirmFieldProps = {
			name: 'confirm',
			type: 'password',
			onChange: this._onPasswordConfirmChanged.bind(this)
		}
		this.captchaFieldProps = {
			name: 'captcha',
			onChange: this._onCaptchaChanged.bind(this),
			placeholder: 'Réponse'
		}
		this.cancelButtonProps = {
			block: true,
			children: 'Annuler',
			bsStyle: 'primary',
			bsSize: 'large'
		}
		this.submitButtonProps = {
			block: true,
			children: 'Créer compte',
			bsStyle: 'success',
			bsSize: 'large',
			type: 'submit',
			onClick: this._onSubmit.bind(this)
		}
		// Component properties
		this.propsInfos = {
			required : {
				onCancel: { rename: 'onClick', store: this.cancelButtonProps },
				onSubmit: {}
			},
			optionnal : {
				onChange: {},
				title: { defaultValue: 'Création compte', rename: 'header', store: this.panelProps },
				errorMessage: { defaultValue: null, rename: 'children', store: this.errorDivProps },

				userLabel: { defaultValue: 'Adresse électronique', rename: 'label', store: this.usernameFieldProps },
				userPlaceholder: { defaultValue: 'Adresse électronique', rename: 'placeholder', store: this.usernameFieldProps },
				passLabel: { defaultValue: 'Mot de passe', rename: 'label', store: this.passwordFieldProps },
				passPlaceholder: { defaultValue: 'Mot de passe', rename: 'placeholder', store: this.passwordFieldProps },
				confirmLabel: { defaultValue: 'Confirmation de votre mot de passe', rename: 'label', store: this.passwordConfirmFieldProps },
				confirmPlaceholder: { defaultValue: 'Mot de passe', rename: 'placeholder', store: this.passwordConfirmFieldProps },
				captcha: { defaultValue: '', rename: 'label', store: this.captchaFieldProps }
			}
		}
	}

	// View Callbacks //
	// --------------------------------------------------------------------------------

	_onUsernameChanged(_, value) {
		this.setState({ username: value })
	}
	_onPasswordChanged(_, value) {
		this.setState({ password: value })
	}
	_onPasswordConfirmChanged(_, value) {
		this.setState({ passwordConfirm: value })
	}
	_onCaptchaChanged(_, value) {
		this.setState({ captcha: value })
	}

	_onSubmit() {
		this.props.onSubmit({
			username: this.state.username,
			password: this.state.password,
			confirm: this.state.passwordConfirm,
			captcha: this.state.captcha
		})
	}

	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	_checkSubmitButtonState() {
		let disabled = !this.state.username || !this.state.password || (this.props.captcha && !this.state.captcha) || this.state.password !== this.state.passwordConfirm
		this.submitButtonProps.disabled = disabled
		this.submitButtonProps.bsStyle = disabled ? 'default' : 'success'
	}

	render() { 
		this.buildProps('BasicRegistration')
		this._checkSubmitButtonState()
		return (
			<div className='row ap-basic-registration'>
				<Col {...this.containerProps} >
					<Panel {...this.panelProps} >
						<Form onSubmit={this._onSubmit.bind(this)}>
							{this.errorDivProps.children ? 
								<div {...this.errorDivProps} />
							: '' }
							<FormInput {...this.usernameFieldProps} />
							<FormInput {...this.passwordFieldProps} />
							<FormInput {...this.passwordConfirmFieldProps} />
							{this.props.captcha ?
							<FormInput {...this.captchaFieldProps} />
							: '' }
							<br/><br/>
							<Col xs={12}>
								<LayoutColumn>
									<Button {...this.cancelButtonProps} />
									<Button {...this.submitButtonProps} />
								</LayoutColumn>
							</Col>
						</Form>
					</Panel>
				</Col>
			</div>
		)
	}
}
export default BasicRegistration;
