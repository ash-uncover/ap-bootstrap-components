import React from 'react'
import ButtonsData from 'components/bootstrap/buttons/ButtonsData'

import { Button, Panel, PanelHeader, PanelBody, PanelFooter, CodeXml, CodeXmlComment } from 'lib/exports'

import './Buttons.scss'

class Buttons extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		ButtonsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		ButtonsData.unregister()
	}

	onDataUpdate() {
		this.setState({ ButtonsData: ButtonsData })
	}

	render() { return (
		<div className='ap-rb-buttons'>
			<h1>Buttons</h1>

			<h2>Button tags</h2>

			<h2>Options</h2>
			<p>Use <code>bsStyle</code> to quickly create a styled button.</p>
			<Panel className='ap-rb-buttons-style' bsStyle='default'>
				<PanelBody>
					<h4>Example</h4>
					<Button>No Style</Button>
					<Button bsStyle='default'>Default</Button>
					<Button bsStyle='primary'>Primary</Button>
					<Button bsStyle='success'>Success</Button>
					<Button bsStyle='info'>Info</Button>
					<Button bsStyle='warning'>Warning</Button>
					<Button bsStyle='danger'>Danger</Button>
					<Button bsStyle='link'>Link</Button>
				</PanelBody>
				<PanelFooter>
						<p>
							<CodeXmlComment>Unstyled button</CodeXmlComment>
							<CodeXml markup='Button'>No Style</CodeXml>
						</p>
						<p>
							<CodeXmlComment>Standard button</CodeXmlComment>
							<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'default'}]}>Default</CodeXml>
						</p>
						<p>
							<CodeXmlComment>Provides extra visual weight and identifies the primary action in a set of buttons</CodeXmlComment>
							<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'primary'}]}>Primary</CodeXml>
						</p>
						<p>
							<CodeXmlComment>Indicates a successful or positive action</CodeXmlComment>
							<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'success'}]}>Success</CodeXml>
						</p>
						<p>
							<CodeXmlComment>Contextual button for informational alert messages</CodeXmlComment>
							<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'info'}]}>Info</CodeXml>
						</p>
						<p>
							<CodeXmlComment>Indicates caution should be taken with this action</CodeXmlComment>
							<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'warning'}]}>Warning</CodeXml>
						</p>
						<p>
							<CodeXmlComment>Indicates a dangerous or potentially negative action</CodeXmlComment>
							<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'danger'}]}>Danger</CodeXml>
						</p>
						<p>
							<CodeXmlComment>Deemphasize a button by making it look like a link while maintaining button behavior</CodeXmlComment>
							<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'link'}]}>Link</CodeXml>
						</p>
				</PanelFooter>
			</Panel>

			<h2>Sizes</h2>
			<p>Fancy larger or smaller buttons? Add <code>bsSize</code> for additional sizes.</p>
			<Panel className='ap-rb-buttons-size' bsStyle='default'>
				<PanelBody>
					<h4>Example</h4>
					<p>
						<Button bsSize='lg' bsStyle='primary'>Large button</Button>
						<Button bsSize='lg' bsStyle='default'>Large button</Button>
					</p>
					<p>
						<Button bsStyle='primary'>Default button</Button>
						<Button bsStyle='default'>Default button</Button>
					</p>
					<p>
						<Button bsSize='sm' bsStyle='primary'>Small button</Button>
						<Button bsSize='sm' bsStyle='default'>Small button</Button>
					</p>
					<p>
						<Button bsSize='xs' bsStyle='primary'>Extra small button</Button>
						<Button bsSize='xs' bsStyle='default'>Extra small button</Button>
					</p>
				</PanelBody>
				<PanelFooter>
					<CodeXml markup='p'>
						<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'lg'}, { name: 'bsStyle', value: 'primary'}]}>Large button</CodeXml>
						<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'lg'}, { name: 'bsStyle', value: 'default'}]}>Large button</CodeXml>
					</CodeXml>
					<CodeXml markup='p'>
						<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'primary'}]}>Default button</CodeXml>
						<CodeXml markup='Button' att={[{ name: 'bsStyle', value: 'default'}]}>Default button</CodeXml>
					</CodeXml>
					<CodeXml markup='p'>
						<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'sm'}, { name: 'bsStyle', value: 'primary'}]}>Small button</CodeXml>
						<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'sm'}, { name: 'bsStyle', value: 'default'}]}>Small button</CodeXml>
					</CodeXml>
					<CodeXml markup='p'>
						<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'xs'}, { name: 'bsStyle', value: 'primary'}]}>Extra small button</CodeXml>
						<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'xs'}, { name: 'bsStyle', value: 'default'}]}>Extra small button</CodeXml>
					</CodeXml>
				</PanelFooter>
			</Panel>
			
			<p>Create block level buttons—those that span the full width of a parent— by adding <code>block</code>.</p>
			
			<Panel className='ap-rb-buttons-block' bsStyle='default'>
				<PanelBody>
					<h4>Example</h4>
					<Button bsSize='lg' bsStyle='primary' block>Block level button</Button>
					<Button bsSize='lg' bsStyle='default' block>Block level button</Button>
				</PanelBody>
				<PanelFooter>
					<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'lg'}, { name: 'bsStyle', value: 'primary'}, { name: 'block'}]}>
						Block level button
					</CodeXml>
					<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'lg'}, { name: 'bsStyle', value: 'default'}, { name: 'block'}]}>
						Block level button
					</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Active state</h2>
			<p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. For <code>{'<button>'}</code> elements, this is done via :active. For <code>{'<a>'}</code> elements, it's done with .active. However, you may use .active on {'<button>'} (and include the aria-pressed="true" attribute) should you need to replicate the active state programmatically.</p>

			<Panel className='ap-rb-buttons-active-button' bsStyle='default'>
				<PanelBody>
					<h4>Example</h4>
					<Button bsSize='lg' bsStyle='primary' active>Primary button</Button>
					<Button bsSize='lg' bsStyle='default' active>Button</Button>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'lg'}, { name: 'bsStyle', value: 'primary'}, { name: 'active'}]}>
						Primary button
					</CodeXml>
					<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'lg'}, { name: 'bsStyle', value: 'default'}, { name: 'active'}]}>
						Button
					</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='button' att={[{ name: 'class', value: 'btn ap-button active btn-lg btn-primary'}, { name: 'type', value: 'button'}]}>
						Primary Button
					</CodeXml>
					<CodeXml markup='button' att={[{ name: 'class', value: 'btn ap-button active btn-lg btn-default'}, { name: 'type', value: 'button'}]}>
						Button
					</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Disabled state</h2>
			<p>Make buttons look unclickable by fading them back with opacity.</p>
			<p>Add the <code>disabled</code> attribute to <code>{'<Button>'}</code>.</p>

			<Panel className='ap-rb-buttons-disabled-button' bsStyle='default'>
				<PanelBody>
					<h4>Example</h4>
					<Button bsSize='lg' bsStyle='primary' disabled>Primary button</Button>
					<Button bsSize='lg' bsStyle='default' disabled>Button</Button>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'lg'}, { name: 'bsStyle', value: 'primary'}, { name: 'disabled'}]}>
						Primary button
					</CodeXml>
					<CodeXml markup='Button' att={[{ name: 'bsSize', value: 'lg'}, { name: 'bsStyle', value: 'default'}, { name: 'disabled'}]}>
						Button
					</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='button' att={[{ name: 'class', value: 'btn ap-button btn-lg btn-primary'}, { name: 'type', value: 'button'}, { name: 'disabled'}]}>
						Primary Button
					</CodeXml>
					<CodeXml markup='button' att={[{ name: 'class', value: 'btn ap-button btn-lg btn-default'}, { name: 'type', value: 'button'}, { name: 'disabled'}]}>
						Button
					</CodeXml>
				</PanelFooter>
			</Panel>
		</div>
	)}
}
export default Buttons
