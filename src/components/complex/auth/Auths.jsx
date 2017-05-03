import React from 'react'
import AuthsData from 'components/complex/auth/AuthsData'

import { Grid, Table, Panel, CodeXml, BasicLogin, BasicRegistration } from 'lib/exports'

import './Auths.scss'

class Auths extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		AuthsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		AuthsData.unregister()
	}

	onDataUpdate() {
		this.setState({ data: AuthsData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-cp-auths' id='ap-cp-auths'>
				<h1>Authentication component</h1>

				<h2>Basic login</h2>
				<p>The <code>{'<BasicLogin>'}</code> component provides a generic way to retrieve user credentials.</p>
				<p>The component handles three callbacks: <code>onChange</code>, <code>onSubmit</code> and <code>onCancel</code> that can be used to retreive the current state of the user inputs.</p>

				<Panel>
					<Panel.Body>
						<h4>Example</h4>
				
						<BasicLogin {...this.state.data.loginData}>
							{this.state.data.loginErrorData}
						</BasicLogin>
						
						<Grid.Row>
							<Grid.Col sm={6}>
								<Table bordered responsive>
									<Table.Head>
										<tr><th>Field</th><th>onChange value</th></tr>
									</Table.Head>
									<Table.Body>
										<tr><th>Username</th><td>{this.state.data.loginUsername}</td></tr>
										<tr><th>Password</th><td>{this.state.data.loginPassword}</td></tr>
									</Table.Body>
								</Table>
							</Grid.Col>
							<Grid.Col sm={6}>
								<Table bordered responsive>
									<Table.Head>
										<tr><th>Field</th><th>onSubmit value</th></tr>
									</Table.Head>
									<Table.Body>
										<tr><th>Username</th><td>{this.state.data.loginSubmitUsername}</td></tr>
										<tr><th>Password</th><td>{this.state.data.loginSubmitPassword}</td></tr>
									</Table.Body>
								</Table>
							</Grid.Col>
						</Grid.Row>
					</Panel.Body>
				</Panel>

				<h2>Basic registration</h2>
				<p>The <code>{'<BasicRegistration>'}</code> component provides a generic way to create a user.</p>
				<p>The component handles three callbacks: <code>onChange</code>, <code>onSubmit</code> and <code>onCancel</code> that can be used to retreive the current state of the user inputs.</p>

				<Panel>
					<Panel.Body>
						<h4>Example</h4>
				
						<BasicRegistration {...this.state.data.registerData}>
							{this.state.data.registerErrorData}
						</BasicRegistration>
						
						<Grid.Row>
							<Grid.Col sm={6}>
								<Table bordered responsive>
									<Table.Head>
										<tr><th>Field</th><th>onChange value</th></tr>
									</Table.Head>
									<Table.Body>
										<tr><th>Username</th><td>{this.state.data.registerUsername}</td></tr>
										<tr><th>Password</th><td>{this.state.data.registerPassword}</td></tr>
										<tr><th>Confirm</th><td>{this.state.data.registerConfirm}</td></tr>
									</Table.Body>
								</Table>
							</Grid.Col>
							<Grid.Col sm={6}>
								<Table bordered responsive>
									<Table.Head>
										<tr><th>Field</th><th>onSubmit value</th></tr>
									</Table.Head>
									<Table.Body>
										<tr><th>Username</th><td>{this.state.data.registerSubmitUsername}</td></tr>
										<tr><th>Password</th><td>{this.state.data.registerSubmitPassword}</td></tr>
									</Table.Body>
								</Table>
							</Grid.Col>
						</Grid.Row>
					</Panel.Body>
				</Panel>
			</div>
		)
	}
}
export default Auths
