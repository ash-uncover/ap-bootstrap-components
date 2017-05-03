import React from 'react'
import Base from 'lib/components/Base'
// Custom components
import { Row, Col, Panel, Form, Button } from 'lib/exports'

class BasicLogin extends Base {

	constructor(props) {
		super(props)
		this.state = {
			username: this.props.username || '',
			password: this.props.password || '',
			confirm: this.props.confirm || ''
		}
		// Base classes
		this.baseClasses = [ 'ap-basic-login' ]
		// Sub components
		this.panelProps = {}
		this.panelHeaderProps = {}
 		this.labelUsernameProps = {
			for: 'registerUsername'
		}
		this.inputUsernameProps = {
			id: 'registerUsername',
			type: 'email',
			onChange: this._onUsernameChanged.bind(this)
		}
		this.labelPasswordProps = {
			for: 'registerPassword'
		}
		this.inputPasswordProps = {
			id: 'registerPassword',
			type: 'password',
			onChange: this._onPasswordChanged.bind(this)
		}
		this.labelConfirmProps = {
			for: 'registerConfirm'
		}
		this.inputConfirmProps = {
			id: 'registerConfirm',
			type: 'password',
			onChange: this._onConfirmChanged.bind(this)
		}
		this.buttonCancelProps = {
			block: true,
			children: 'Cancel',
			bsStyle: 'primary',
			bsSize: 'large'
		}
		this.buttonSubmitProps = {
			block: true,
			children: 'Login',
			bsStyle: 'success',
			bsSize: 'large',
			type: 'submit',
			onClick: this._onSubmit.bind(this)
		}
		// Component properties
		this.propsInfos = {
			required : {
				onCancel: { rename: 'onClick', store: this.buttonCancelProps },
				onSubmit: {}
			},
			optionnal : {
				children: {},
				onChange: {},
				title: { defaultValue: 'User credentials', rename: 'children', store: this.panelHeaderProps },
				usernameLabel: { defaultValue: 'Username', rename: 'children', store: this.labelUsernameProps },
				usernamePlaceholder: { defaultValue: 'Enter username', rename: 'placeholder', store: this.inputUsernameProps },
				username: {},
				passwordLabel: { defaultValue: 'Password', rename: 'children', store: this.labelPasswordProps },
				passwordPlaceholder: { defaultValue: 'Enter password', rename: 'placeholder', store: this.inputPasswordProps },
				password: {},
				confirmLabel: { defaultValue: 'Confirm password', rename: 'children', store: this.labelConfirmProps },
				confirmPlaceholder: { defaultValue: 'Confirm password', rename: 'placeholder', store: this.inputConfirmProps },
				confirm: {}
			}
		}
	}

	// State management //
	// --------------------------------------------------------------------------------

	componentWillReceiveProps(props) {
		this.setState({
			username: props.username || '',
			password: props.password || '',
			confirm: props.confirm || ''
		})
	}


	// View Callbacks //
	// --------------------------------------------------------------------------------

	_onUsernameChanged(e, value) {
		if (this.props.onChange) {
			this.props.onChange({
				username: value,
				password: this.state.password,
				confirm: this.state.confirm
			})
		}
		this.setState({ username: value })
	}

	_onPasswordChanged(e, value) {
		if (this.props.onChange) {
			this.props.onChange({
				username: this.state.username,
				password: value,
				confirm: this.state.confirm
			})
		}
		this.setState({ password: value })
	}

	_onConfirmChanged(e, value) {
		if (this.props.onChange) {
			this.props.onChange({
				username: this.state.username,
				password: this.state.password,
				confirm: value
			})
		}
		this.setState({ confirm: value })
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
		let disabled = !this.state.username || !this.state.password || (this.state.password !== this.state.confirm)
		this.buttonSubmitProps.disabled = disabled
		this.buttonSubmitProps.bsStyle = disabled ? 'default' : 'success'
	}

	_buildButtons() { return (
		<Row>
			<Col sm={6}>
				<Button {...this.buttonCancelProps} />
			</Col>
			<Col sm={6}>
				<Button {...this.buttonSubmitProps} />
			</Col>
		</Row>
	)}

	render() { 
		this.buildProps('BasicRegistration')
		this._checkSubmitButtonState()
		return (
			<Panel className={this.className} {...this.panelProps} >
				<Panel.Header {...this.panelHeaderProps} />
				<Panel.Body>
					<Form>
						<Form.Group>
							<Form.Label {...this.labelUsernameProps} />
							<Form.Input {...this.inputUsernameProps} defaultValue={this.state.username} />
						</Form.Group>
						<Form.Group>
							<Form.Label {...this.labelPasswordProps} />
							<Form.Input {...this.inputPasswordProps} defaultValue={this.state.password} />
						</Form.Group>
						<Form.Group>
							<Form.Label {...this.labelConfirmProps} />
							<Form.Input {...this.inputConfirmProps} defaultValue={this.state.confirm} />
						</Form.Group>
						{this.props.children}
						{ this.props.footer ? this._buildButtons() : '' }					
					</Form>
				</Panel.Body>
				<Panel.Footer>
					{ this.props.footer ? this.props.footer : this._buildButtons() }
				</Panel.Footer>
			</Panel>
		)
	}
}
export default BasicLogin