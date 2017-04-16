import React from 'react'
import PanelsData from 'components/bootstrap/panels/PanelsData'

import { Panel, PanelHeader, PanelTitle, PanelBody, PanelFooter, CodeXml, CodeXmlComment } from 'lib/exports'

import './Panels.scss'

class Panels extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		PanelsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		PanelsData.unregister()
	}

	onDataUpdate() {
		this.setState({ PanelsData: PanelsData })
	}

	render() { return (
		<div className='ap-rb-panels'>
			<h1>Panels</h1>
			<p>While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.</p>
			
			<h2>Basic example</h2>
			<p>By default, all the <code>{'<Panel>'}</code> does is apply some basic border and padding to contain some content.</p>

			<Panel className='ap-rb-panels-basic'>
				<PanelBody>
					<h4>Example</h4>
					<Panel>
						<PanelBody>
							Basic panel example
						</PanelBody>
					</Panel>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Panel'>
						<CodeXml markup='PanelBody'>
							<CodeXml>Basic panel example</CodeXml>
						</CodeXml>
					</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='div' att={[{name:'class', value:'panel ap-panel panel-default'}]}>
						<CodeXml markup='div' att={[{name:'class', value:'panel-body ap-panel-body'}]}>
							<CodeXml>Basic panel example</CodeXml>
						</CodeXml>
					</CodeXml>

				</PanelFooter>
			</Panel>

			<h2>Panel with heading</h2>
			<p>Easily add a heading container to your panel with <code>{'<PanelHeader>'}</code>. You may also include any <code>{'<h1>'}</code>-<code>{'<h6>'}</code> with a <code>{'<PanelTitle>'}</code> to add a pre-styled heading. However, the font sizes of <code>{'<h1>'}</code>-<code>{'<h6>'}</code> are overridden by <code>{'<PanelHeader>'}</code>.</p>
			<p>For proper link coloring, be sure to place links in headings within <code>{'<PanelTitle>'}</code>.</p>

			<Panel className='ap-rb-panels-header'>
				<PanelBody>
					<h4>Example</h4>
					<Panel>
						<PanelHeader>
							Panel heading without title
						</PanelHeader>
						<PanelBody>
							Panel content
						</PanelBody>
					</Panel>
					<Panel>
						<PanelHeader>
							<PanelTitle level='h3'>
								Panel title
							</PanelTitle>							
						</PanelHeader>
						<PanelBody>
							Panel content
						</PanelBody>
					</Panel>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Panel'>
						<CodeXml markup='PanelHeader'>
							<CodeXml>Panel heading without title</CodeXml>
						</CodeXml>
						<CodeXml markup='PanelBody'>
							<CodeXml>Panel content</CodeXml>
						</CodeXml>
					</CodeXml>
					<CodeXml markup='Panel'>
						<CodeXml markup='PanelHeader'>
							<CodeXml markup='PanelTitle' att={[{name:'level', value:'h3'}]}>
								<CodeXml>Panel title</CodeXml>
							</CodeXml>
						</CodeXml>
						<CodeXml markup='PanelBody'>
							<CodeXml>Panel content</CodeXml>
						</CodeXml>
					</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='div' att={[{name:'class', value:'panel ap-panel panel-default'}]}>
						<CodeXml markup='div' att={[{name:'class', value:'panel-heading ap-panel-heading'}]}>Panel heading without title</CodeXml>
						<CodeXml markup='div' att={[{name:'class', value:'panel-body ap-panel-body'}]}>
							<CodeXml>Panel content</CodeXml>
						</CodeXml>
					</CodeXml>
					<CodeXml markup='div' att={[{name:'class', value:'panel ap-panel panel-default'}]}>
						<CodeXml markup='div' att={[{name:'class', value:'panel-heading ap-panel-heading'}]}>
							<CodeXml markup='h3' att={[{name:'class', value:'panel-title ap-panel-title'}]}>Panel title</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class', value:'panel-body ap-panel-body'}]}>
							<CodeXml>Panel content</CodeXml>
						</CodeXml>
					</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Panel with footer</h2>
			<p>Wrap buttons or secondary text in <code>{'<PanelFooter>'}</code>. Note that panel footers <b>do not</b> inherit colors and borders when using contextual variations as they are not meant to be in the foreground.</p>

			<Panel className='ap-rb-panels-footer'>
				<PanelBody>
					<h4>Example</h4>
					<Panel>
						<PanelBody>
							Panel content
						</PanelBody>
						<PanelFooter>
							Panel footer
						</PanelFooter>
					</Panel>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Panel'>
						<CodeXml markup='PanelBody'>
							<CodeXml>Panel content</CodeXml>
						</CodeXml>
						<CodeXml markup='PanelFooter'>
							<CodeXml>Panel footer</CodeXml>
						</CodeXml>
					</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='div' att={[{name:'class', value:'panel ap-panel panel-default'}]}>
						<CodeXml markup='div' att={[{name:'class', value:'panel-body ap-panel-body'}]}>
							<CodeXml>Panel content</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class', value:'panel-footer ap-panel-footer'}]}>
							<CodeXml>Panel footer</CodeXml>
						</CodeXml>
					</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Contextual alternatives</h2>
			<p>Like other components, easily make a panel more meaningful to a particular context by adding any of the contextual state classes.</p>

			<Panel className='ap-rb-panels-style'>
				<PanelBody>
					<h4>Example</h4>
					<Panel bsStyle='primary'>
						<PanelHeader>
							<PanelTitle>Panel title</PanelTitle>
						</PanelHeader>
						<PanelBody>
							Panel content
						</PanelBody>
					</Panel>
					<Panel bsStyle='success'>
						<PanelHeader>
							<PanelTitle>Panel title</PanelTitle>
						</PanelHeader>
						<PanelBody>
							Panel content
						</PanelBody>
					</Panel>
					<Panel bsStyle='info'>
						<PanelHeader>
							<PanelTitle>Panel title</PanelTitle>
						</PanelHeader>
						<PanelBody>
							Panel content
						</PanelBody>
					</Panel>
					<Panel bsStyle='warning'>
						<PanelHeader>
							<PanelTitle>Panel title</PanelTitle>
						</PanelHeader>
						<PanelBody>
							Panel content
						</PanelBody>
					</Panel>
					<Panel bsStyle='danger'>
						<PanelHeader>
							<PanelTitle>Panel title</PanelTitle>
						</PanelHeader>
						<PanelBody>
							Panel content
						</PanelBody>
					</Panel>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Panel' att={[{name:'bsStyle',value:'primary'}]}>...</CodeXml>
					<CodeXml markup='Panel' att={[{name:'bsStyle',value:'success'}]}>...</CodeXml>
					<CodeXml markup='Panel' att={[{name:'bsStyle',value:'info'}]}>...</CodeXml>
					<CodeXml markup='Panel' att={[{name:'bsStyle',value:'warning'}]}>...</CodeXml>
					<CodeXml markup='Panel' att={[{name:'bsStyle',value:'danger'}]}>...</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='div' att={[{name:'class',value:'panel ap-panel panel-primary'}]}>...</CodeXml>
					<CodeXml markup='div' att={[{name:'class',value:'panel ap-panel panel-success'}]}>...</CodeXml>
					<CodeXml markup='div' att={[{name:'class',value:'panel ap-panel panel-info'}]}>...</CodeXml>
					<CodeXml markup='div' att={[{name:'class',value:'panel ap-panel panel-warning'}]}>...</CodeXml>
					<CodeXml markup='div' att={[{name:'class',value:'panel ap-panel panel-danger'}]}>...</CodeXml>
				</PanelFooter>
			</Panel>
		</div>
	)}
}
export default Panels
