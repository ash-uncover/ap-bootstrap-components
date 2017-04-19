import React from 'react'
import LabelsData from 'components/bootstrap/labels/LabelsData'

import { Panel, PanelBody, PanelFooter, CodeXml, CodeXmlGroup, Label } from 'lib/exports'

import './Labels.scss'

class Labels extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		LabelsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		LabelsData.unregister()
	}

	onDataUpdate() {
		this.setState({ LabelsData: LabelsData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-labels' id='ap-labels'>
				<h1>Labels</h1>

				<h2>Example</h2>

				<Panel>
					<PanelBody>
						<h4>Example</h4>
						<h1>Example heading <Label>New</Label></h1>
						<h2>Example heading <Label>New</Label></h2>
						<h3>Example heading <Label>New</Label></h3>
						<h4>Example heading <Label>New</Label></h4>
						<h5>Example heading <Label>New</Label></h5>
						<h6>Example heading <Label>New</Label></h6>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='h3'>Example heading <CodeXml markup='Label' inline>New</CodeXml></CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='h3'>Example heading <CodeXml markup='span' att={[{name:'class',value:'label ap-label label-default'}]} inline>New</CodeXml></CodeXml>
					</PanelFooter>
				</Panel>

				<h2>Available variations</h2>
				<p>Add any of the below mentioned modifier classes to change the appearance of a label.</p>

				<Panel>
					<PanelBody className='ap-rb-labels-variations'>
						<Label>Default</Label>
						<Label bsStyle='primary'>Primary</Label>
						<Label bsStyle='success'>Success</Label>
						<Label bsStyle='info'>Info</Label>
						<Label bsStyle='warning'>Warning</Label>
						<Label bsStyle='danger'>Danger</Label>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXmlGroup>
							<CodeXml markup='Label'>Default</CodeXml>
							<CodeXml markup='Label' att={[{name:'bsStyle',value:'primary'}]}>Primary</CodeXml>
							<CodeXml markup='Label' att={[{name:'bsStyle',value:'success'}]}>Success</CodeXml>
							<CodeXml markup='Label' att={[{name:'bsStyle',value:'info'}]}>Info</CodeXml>
							<CodeXml markup='Label' att={[{name:'bsStyle',value:'warning'}]}>Warning</CodeXml>
							<CodeXml markup='Label' att={[{name:'bsStyle',value:'danger'}]}>Danger</CodeXml>
						</CodeXmlGroup>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXmlGroup>
							<CodeXml markup='span' att={[{name:'class',value:'label ap-label label-default'}]}>Default</CodeXml>
							<CodeXml markup='span' att={[{name:'class',value:'label ap-label label-primary'}]}>Primary</CodeXml>
							<CodeXml markup='span' att={[{name:'class',value:'label ap-label label-success'}]}>Success</CodeXml>
							<CodeXml markup='span' att={[{name:'class',value:'label ap-label label-info'}]}>Info</CodeXml>
							<CodeXml markup='span' att={[{name:'class',value:'label ap-label label-warning'}]}>Warning</CodeXml>
							<CodeXml markup='span' att={[{name:'class',value:'label ap-label label-danger'}]}>Danger</CodeXml>
						</CodeXmlGroup>
					</PanelFooter>
				</Panel>
			</div>
		)
	}

}
export default Labels
