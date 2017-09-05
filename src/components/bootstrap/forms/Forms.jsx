import React from 'react'
import FormsData from 'components/bootstrap/forms/FormsData'

import { Panel, Button, CodeXml, CodeXmlComment, Form, FormGroupBuilder, SearchBar } from 'lib/exports'

import './Forms.scss'

class Forms extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		FormsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		FormsData.unregister()
	}

	onDataUpdate() {
		this.setState({ 
			data: FormsData,
			search: '',
			year: 2017,
			month: 1,
			date: 1,
			minute: 0,
			hour: 0
		})
	}

	onSearch(value) {
		this.setState({ search: value })
	}
	onDate(value) {
		this.setState({ date: value })
	}
	onTime(value) {
		this.setState({ time: value })
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-forms' id='ap-rb-forms'>
				<h1>Forms</h1>

				<h2>Basic example</h2>
				
				<p>Individual form controls automatically receive some global styling. Components <code>{'<FormInput>'}</code>, <code>{'<FormTextArea>'}</code>, and <code>{'<FormCheckbox>'}</code> are set to width: 100%; by default. Wrap labels and controls in <code>{'<FormGroup>'}</code> for optimum spacing</p>

				<Panel className='ap-rb-forms-examples'>
					<Panel.Body>
						<h4>Example</h4>
						<Form>
							<Form.Group>
								<Form.Label htmlFor='exampleInputEmail'>Email address</Form.Label>
								<Form.Input id='exampleInputEmail' placeholder='Email' type='email' />
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='exampleInputPassword1'>Password</Form.Label>
								<Form.Input id='exampleInputPassword1' placeholder='Password' type='password' />
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='exampleInputFile'>File input</Form.Label>
								<Form.Input id='exampleInputFile' type='file' />
								<p className='help-block'>Example block-level help text here.</p>
							</Form.Group>
							<Form.Checkbox />
							<Form.Checkbox text='Check me out' />
							<Form.Switch />
							<Form.Switch text='Switch me out' />
							<Button bsStyle='default' type='submit'>Submit</Button>
						</Form>
					</Panel.Body>
					<Panel.Footer>
						<h5>React code</h5>
						<CodeXml markup='Form'>
							<CodeXml markup='FormGroup'>
								<CodeXml markup='FormLabel' att={[{name:'htmlFor',value:'exampleInputEmail'}]}>
									Email address
								</CodeXml>
								<CodeXml markup='FormInput' att={[{name:'id',value:'exampleInputEmail'},{name:'placeholder',value:'Email'},{name:'type',value:'email'}]} />
							</CodeXml>
							<CodeXml markup='FormGroup'>
								<CodeXml markup='FormLabel' att={[{name:'htmlFor',value:'exampleInputPassword1'}]}>
									Password
								</CodeXml>
								<CodeXml markup='FormInput' att={[{name:'id',value:'exampleInputPassword1'},{name:'placeholder',value:'Password'},{name:'type',value:'password'}]} />
							</CodeXml>
							<CodeXml markup='FormGroup'>
								<CodeXml markup='FormLabel' att={[{name:'htmlFor',value:'exampleInputFile'}]}>
									File input
								</CodeXml>
								<CodeXml markup='FormInput' att={[{name:'id',value:'exampleInputFile'},{name:'type',value:'file'}]} />
								<CodeXml markup='p' att={[{name:'className',value:'help-block'}]}>
									Example block-level help text here.
								</CodeXml>
							</CodeXml>
							<CodeXml markup='FormCheckbox'/>
							<CodeXml markup='FormCheckbox' att={[{name:'text',value:'Check me out'}]}/>
							<CodeXml markup='FormSwitch' />
							<CodeXml markup='FormSwitch' att={[{name:'text',value:'Switch me out'}]}/>
							<CodeXml markup='Button' att={[{name:'bsStyle',value:'default'},{name:'type',value:'submit'}]}>
								Submit
							</CodeXml>
						</CodeXml>
					</Panel.Footer>
					<Panel.Footer>
						<h5>HTML output</h5>
						<CodeXml markup='form' att={[{name:'class',value:'ap-form'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'form-group ap-form-group'}]}>
								<CodeXml markup='label' att={[{name:'class',value:'ap-form-label'}]}>
									Email address
								</CodeXml>
								<CodeXml markup='input' att={[{name:'class',value:'form-control ap-form-input'},{name:'id',value:'exampleInputEmail'},{name:'placeholder',value:'Email'},{name:'type',value:'email'}]} />
							</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'form-group ap-form-group'}]}>
								<CodeXml markup='label' att={[{name:'class',value:'ap-form-label'}]}>
									Password
								</CodeXml>
								<CodeXml markup='input' att={[{name:'class',value:'form-control ap-form-input'},{name:'id',value:'exampleInputPassword1'},{name:'placeholder',value:'Password'},{name:'type',value:'password'}]} />
							</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'form-group ap-form-group'}]}>
								<CodeXml markup='label' att={[{name:'class',value:'ap-form-label'}]}>
									File input
								</CodeXml>
								<CodeXml markup='input' att={[{name:'class',value:'form-control ap-form-input'},{name:'id',value:'exampleInputFile'},{name:'type',value:'file'}]} />
								<CodeXml markup='p' att={[{name:'class',value:'help-block'}]}>
									Example block-level help text here.
								</CodeXml>
							</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'checkbox ap-form-checkbox'}]}>
								<CodeXml markup='label'>
									<CodeXml markup='input' att={[{name:'type',value:'checkbox'},{name:'value',value:'on'}]}/>
								</CodeXml>
							</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'checkbox ap-form-checkbox'}]}>
								<CodeXml markup='label'>
									<CodeXml markup='input' att={[{name:'type',value:'checkbox'},{name:'value',value:'on'}]} after=' Check me out'/>
								</CodeXml>
							</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'checkbox ap-form-switch'}]}>
								<CodeXml markup='label'>
									<CodeXml markup='input' att={[{name:'class',value:'ap-form-switch-checkbox'},{name:'type',value:'checkbox'},{name:'value',value:'on'}]}/>
								</CodeXml>
							</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'checkbox ap-form-switch'}]}>
								<CodeXml markup='label'>
									<CodeXml markup='input' att={[{name:'class',value:'ap-form-switch-checkbox'},{name:'type',value:'checkbox'},{name:'value',value:'on'}]} after='Switch me out'/>
								</CodeXml>
							</CodeXml>
							<CodeXml markup='button' att={[{name:'class',value:'btn ap-button btn-default'},{name:'type',value:'submit'}]}>
								Submit
							</CodeXml>
						</CodeXml>
					</Panel.Footer>
				</Panel>

				<h3>FormGroupBuilder</h3>
				<Panel className='ap-rb-forms-examples'>
					<Panel.Body>
						<h4>Example</h4>
						<Form horizontal>
							<FormGroupBuilder label='kiko' labelSm={2} type='input'/>
						</Form>
					</Panel.Body>
				</Panel>

				<h2>Forms Presets</h2>

				<h3>SearchBar</h3>

				<Panel className='ap-rb-forms-examples'>
					<Panel.Body>
						<h4>Example</h4>
						<SearchBar value={this.state.search} onChange={this.onSearch.bind(this)} />
						<p>Searching: {'"' + this.state.search + '"'}</p>
						<Button onClick={this.onSearch.bind(this, '')}>Reset</Button>
					</Panel.Body>
				</Panel>

				<h3>Date & Time</h3>

				<Panel className='ap-rb-forms-examples'>
					<Panel.Body>
						<h4>Example</h4>
						<Form.Date 
							year={this.state.year} 
							month={this.state.month} 
							day={this.state.date} 
							onChange={this.onDate.bind(this)} />
						<Button onClick={this.onSearch.bind(this, [2017,1,1])}>Reset</Button>
						<br/>
						<Form.Time 
							minute={this.state.minute} 
							hour={this.state.hour} 
							onChange={this.onTime.bind(this)} />
						<Button onClick={this.onSearch.bind(this, [0,0])}>Reset</Button>
					</Panel.Body>
				</Panel>
				
			</div>
		)
	}
}
export default Forms