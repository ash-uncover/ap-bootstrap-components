import React from 'react'
import Base from 'lib/components/Base'
// Custom components
import { Row, Col, Panel, Form, Button } from 'lib/exports'

class BasicLogin extends Base {

	constructor(props) {
		super(props)
		this.state = {
			username: this.props.username || '',
			password: this.props.password || ''
		}
		// Base classes
		this.baseClasses = [ 'ap-basic-login' ]
		// Sub components
		this.panelProps = {}
		this.panelHeaderProps = {}
 		this.labelUsernameProps = {
			for: 'loginUsername'
		}
		this.inputUsernameProps = {
			id: 'loginUsername',
			type: 'email',
			onChange: this._onUsernameChanged.bind(this)
		}
		this.labelPasswordProps = {
			for: 'loginPassword'
		}
		this.inputPasswordProps = {
			id: 'loginPassword',
			type: 'password',
			onChange: this._onPasswordChanged.bind(this)
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
				buttonsInBody: { defaultValue: false },
				children: {},
				onChange: {},
				title: { defaultValue: 'User credentials', rename: 'children', store: this.panelHeaderProps },
				usernameLabel: { defaultValue: 'Username', rename: 'children', store: this.labelUsernameProps },
				usernamePlaceholder: { defaultValue: 'Enter username', rename: 'placeholder', store: this.inputUsernameProps },
				username: {},
				passwordLabel: { defaultValue: 'Password', rename: 'children', store: this.labelPasswordProps },
				passwordPlaceholder: { defaultValue: 'Enter password', rename: 'placeholder', store: this.inputPasswordProps },
				password: {}
			}
		}
	}

	// State management //
	// --------------------------------------------------------------------------------

	componentWillReceiveProps(props) {
		this.setState({
			username: props.username || '',
			password: props.password || ''
		})
	}


	// View Callbacks //
	// --------------------------------------------------------------------------------

	_onUsernameChanged(e, value) {
		if (this.props.onChange) {
			this.props.onChange({
				username: value,
				password: this.state.password
			})
		}
		this.setState({ username: value })
	}

	_onPasswordChanged(e, value) {
		if (this.props.onChange) {
			this.props.onChange({
				username: this.state.username,
				password: value
			})
		}
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
		this.buttonSubmitProps.disabled = disabled
		this.buttonSubmitProps.bsStyle = disabled ? 'default' : 'success'
	}

	render() { 
		this.buildProps('BasicLogin')
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
						{this.props.children}
						{this.props.buttonsInBody ?
							<Row>
								<Col sm={6}>
									<Button {...this.buttonCancelProps} />
								</Col>
								<Col sm={6}>
									<Button {...this.buttonSubmitProps} />
								</Col>
							</Row>
						: '' }					
					</Form>
				</Panel.Body>
				<Panel.Footer>
				{!this.props.buttonsInBody ?
					<Row>
						<Col sm={6}>
							<Button {...this.buttonCancelProps} />
						</Col>
						<Col sm={6}>
							<Button {...this.buttonSubmitProps} />
						</Col>
					</Row>
				: ' ' }
				</Panel.Footer>
			</Panel>
		)
	}
}
export default BasicLogin