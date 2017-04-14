import React from 'react'
import Base from 'Base'
// Custom components
import { Panel, Col, LayoutColumn, Form, FormInput, Button } from 'index'
import { LinkContainer } from 'react-router-bootstrap'
// Utils
import Validators from 'utils/form/Validators'

class BasicLogin extends Base {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
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
			className: 'ap-auth-error'
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
		this.recoverLinkProps = {
			children: <a>Mot de passe oublié ?</a>
		}
		this.cancelButtonProps = {
			block: true,
			children: 'Annuler',
			bsStyle: 'primary',
			bsSize: 'large'
		}
		this.submitButtonProps = {
			block: true,
			children: 'Connexion',
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
				title: { defaultValue: 'Saisir les informations utilisateur', rename: 'header', store: this.panelProps },
				errorMessage: { defaultValue: null, rename: 'children', store: this.errorDivProps },
				userLabel: { defaultValue: 'Adresse électronique', rename: 'label', store: this.usernameFieldProps },
				userPlaceholder: { defaultValue: 'Adresse électronique', rename: 'placeholder', store: this.usernameFieldProps },
				passLabel: { defaultValue: 'Mot de passe', rename: 'label', store: this.passwordFieldProps },
				passPlaceholder: { defaultValue: 'Mot de passe', rename: 'placeholder', store: this.passwordFieldProps },
				recoverLink: { defaultValue: null, rename: 'to', store: this.recoverLinkProps }
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

	_onSubmit() {
		this.props.onSubmit({
			username: this.state.username,
			password: this.state.password
		})
	}

	// Rendering functions //
	// --------------------------------------------------------------------------------

	_checkSubmitButtonState() {
		let disabled = !this.state.username || !this.state.password
		this.submitButtonProps.disabled = disabled
		this.submitButtonProps.bsStyle = disabled ? 'default' : 'success'
	}

	render() { 
		this.buildProps('BasicLogin')
		this._checkSubmitButtonState()
		return (
			<div className='row ap-basic-login'>
				<Col {...this.containerProps} >
					<Panel {...this.panelProps} >
						<Form onSubmit={this._onSubmit.bind(this)}>
						{this.errorDivProps.children ? 
							<div {...this.errorDivProps} />
						: '' }
							<FormInput {...this.usernameFieldProps} />
							<FormInput {...this.passwordFieldProps} />
							{this.recoverLinkProps.to ?
							<LinkContainer {...this.recoverLinkProps} />
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
export default BasicLogin
