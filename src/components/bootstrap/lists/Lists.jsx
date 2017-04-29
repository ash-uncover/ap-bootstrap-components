import React from 'react'
import ListsData from 'components/bootstrap/lists/ListsData'

import { Col, Panel, PanelBody, PanelFooter, CodeXml, CodeXmlGroup, Badge } from 'lib/exports'
import { ListGroup, ListGroupItem } from 'lib/exports'
import { ListGroupLink, ListGroupLinkItem } from 'lib/exports'
import { ListGroupButton, ListGroupButtonItem } from 'lib/exports'
import { ListGroupItemHeading, ListGroupItemText } from 'lib/exports'

import './Lists.scss'

class Lists extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		ListsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		ListsData.unregister()
	}

	onDataUpdate() {
		this.setState({ ListsData: ListsData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-lists' id='ap-lists'>
				<h1>Lists</h1>

				<h3>List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</h3>

				<h2>Basic Example</h2>

				<p>The most basic list group is simply an unordered list with list items, and the proper classes. Build upon it with the options that follow, or your own CSS as needed.</p>

				<Panel>
					<PanelBody>
						<h4>Example</h4>
						<ListGroup>
							<ListGroupItem>Cras justo odio</ListGroupItem>
							<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
							<ListGroupItem>Morbi leo risus</ListGroupItem>
							<ListGroupItem>Porta ac consectetur ac</ListGroupItem>
							<ListGroupItem>Vestibulum at eros</ListGroupItem>
						</ListGroup>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='ListGroup'>
							<CodeXml markup='ListGroupItem'>Cras justo odio</CodeXml>
							<CodeXml markup='ListGroupItem'>Dapibus ac facilisis in</CodeXml>
							<CodeXml markup='ListGroupItem'>Morbi leo risus</CodeXml>
							<CodeXml markup='ListGroupItem'>Porta ac consectetur ac</CodeXml>
							<CodeXml markup='ListGroupItem'>Vestibulum at eros</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='ul' att={[{name:'class',value:'list-group ap-list-group'}]}>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>Cras justo odio</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>Dapibus ac facilisis in</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>Morbi leo risus</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>Porta ac consectetur ac</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>Vestibulum at eros</CodeXml>
						</CodeXml>
					</PanelFooter>
				</Panel>

				<h2>Badges</h2>

				<p>Add the badges component to any list group item and it will automatically be positioned on the right.</p>

				<Panel>
					<PanelBody>
						<h4>Example</h4>
						<ListGroup>
							<ListGroupItem><Badge value={14}/>Cras justo odio</ListGroupItem>
							<ListGroupItem><Badge value={2}/>Dapibus ac facilisis in</ListGroupItem>
							<ListGroupItem><Badge value={1}/>Morbi leo risus</ListGroupItem>
						</ListGroup>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='ListGroup'>
							<CodeXml markup='ListGroupItem'>
								<CodeXml markup='Badge' att={[{name:'value',value:'{14}'}]} inline/>
								Cras justo odio
							</CodeXml>
							<CodeXml markup='ListGroupItem'>
								<CodeXml markup='Badge' att={[{name:'value',value:'{2}'}]} inline/>
								Dapibus ac facilisis in
								</CodeXml>
							<CodeXml markup='ListGroupItem'>
								<CodeXml markup='Badge' att={[{name:'value',value:'{1}'}]} inline/>
								Morbi leo risus
							</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='ul' att={[{name:'class',value:'list-group ap-list-group'}]}>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								<CodeXml markup='span' att={[{name:'class',value:'badge ap-badge'}]} inline>14</CodeXml>
								Cras justo odio
							</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								<CodeXml markup='span' att={[{name:'class',value:'badge ap-badge'}]} inline>2</CodeXml>
								Dapibus ac facilisis in
							</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								<CodeXml markup='span' att={[{name:'class',value:'badge ap-badge'}]} inline>1</CodeXml>
								Morbi leo risus
							</CodeXml>
						</CodeXml>
					</PanelFooter>
				</Panel>

				<h2>Linked items</h2>

				<p>Linkify list group items by using <code>{'<ListGroupLink>'}</code> and <code>{'<ListGroupLinkItem>'}</code> tags instead. No need for individual parents around each element.</p>

				<Panel>
					<PanelBody>
						<h4>Example</h4>
						<ListGroupLink>
							<ListGroupLinkItem active>Cras justo odio</ListGroupLinkItem>
							<ListGroupLinkItem>Dapibus ac facilisis in</ListGroupLinkItem>
							<ListGroupLinkItem>Morbi leo risus</ListGroupLinkItem>
							<ListGroupLinkItem>Porta ac consectetur ac</ListGroupLinkItem>
							<ListGroupLinkItem>Vestibulum at eros</ListGroupLinkItem>
						</ListGroupLink>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='ListGroupLink'>
							<CodeXml markup='ListGroupLinkItem' att={[{name:'active'}]}>Cras justo odio</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>Dapibus ac facilisis in</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>Morbi leo risus</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>Porta ac consectetur ac</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>Vestibulum at eros</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='div' att={[{name:'class',value:'list-group ap-list-group'}]}>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item active'},{name:'href',value:'#'}]}>
								Cras justo odio
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'href',value:'#'}]}>
								Dapibus ac facilisis in
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'href',value:'#'}]}>
								Morbi leo risus
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'href',value:'#'}]}>
								Porta ac consectetur ac
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'href',value:'#'}]}>
								Vestibulum at eros
							</CodeXml>
						</CodeXml>
					</PanelFooter>
				</Panel>

				<h2>Button items</h2>

				<p>List group items may be <code>{'<ListGroupButton>'}</code> and <code>{'<ListGroupButtonItem>'}</code> instead of list items. No need for individual parents around each element. Don't use the standard <code>{'<Button>'}</code> here.</p>

				<Panel>
					<PanelBody>
						<h4>Example</h4>
						<ListGroupButton>
							<ListGroupButtonItem>Cras justo odio</ListGroupButtonItem>
							<ListGroupButtonItem>Dapibus ac facilisis in</ListGroupButtonItem>
							<ListGroupButtonItem>Morbi leo risus</ListGroupButtonItem>
							<ListGroupButtonItem>Porta ac consectetur ac</ListGroupButtonItem>
							<ListGroupButtonItem>Vestibulum at eros</ListGroupButtonItem>
						</ListGroupButton>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='ListGroupButton'>
							<CodeXml markup='ListGroupButtonItem'>Cras justo odio</CodeXml>
							<CodeXml markup='ListGroupButtonItem'>Dapibus ac facilisis in</CodeXml>
							<CodeXml markup='ListGroupButtonItem'>Morbi leo risus</CodeXml>
							<CodeXml markup='ListGroupButtonItem'>Porta ac consectetur ac</CodeXml>
							<CodeXml markup='ListGroupButtonItem'>Vestibulum at eros</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='div' att={[{name:'class',value:'list-group ap-list-group'}]}>
							<CodeXml markup='button' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								Cras justo odio
							</CodeXml>
							<CodeXml markup='button' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								Dapibus ac facilisis in
							</CodeXml>
							<CodeXml markup='button' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								Morbi leo risus
							</CodeXml>
							<CodeXml markup='button' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								Porta ac consectetur ac
							</CodeXml>
							<CodeXml markup='button' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								Vestibulum at eros
							</CodeXml>
						</CodeXml>
					</PanelFooter>
				</Panel>

				<h2>Disabled items</h2>

				<p>Add <code>disabled</code> to a <code>{'ListGroupItem'}</code> to gray it out to appear disabled.</p>

				<Panel>
					<PanelBody>
						<h4>Example</h4>
						<ListGroupLink>
							<ListGroupLinkItem disabled>Cras justo odio</ListGroupLinkItem>
							<ListGroupLinkItem>Dapibus ac facilisis in</ListGroupLinkItem>
							<ListGroupLinkItem>Morbi leo risus</ListGroupLinkItem>
							<ListGroupLinkItem>Porta ac consectetur ac</ListGroupLinkItem>
							<ListGroupLinkItem>Vestibulum at eros</ListGroupLinkItem>
						</ListGroupLink>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='ListGroupLink'>
							<CodeXml markup='ListGroupLinkItem' att={[{name:'disabled'}]}>Cras justo odio</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>Dapibus ac facilisis in</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>Morbi leo risus</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>Porta ac consectetur ac</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>Vestibulum at eros</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='div' att={[{name:'class',value:'list-group ap-list-group'}]}>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item disabled'},{name:'href',value:'#'}]}>
								Cras justo odio
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'href',value:'#'}]}>
								Dapibus ac facilisis in
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'href',value:'#'}]}>
								Morbi leo risus
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'href',value:'#'}]}>
								Porta ac consectetur ac
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'href',value:'#'}]}>
								Vestibulum at eros
							</CodeXml>
						</CodeXml>
					</PanelFooter>
				</Panel>

				<h2>Contextual classes</h2>

				<p>Use contextual classes to style list items, default or linked. Also includes <code>active</code> state.</p>

				<Panel>
					<PanelBody>
						<h4>Example</h4>
						<Col sm={6}>
							<ListGroup>
								<ListGroupItem bsStyle='success'>Dapibus ac facilisis in</ListGroupItem>
								<ListGroupItem bsStyle='info'>Morbi leo risus</ListGroupItem>
								<ListGroupItem bsStyle='warning'>Porta ac consectetur ac</ListGroupItem>
								<ListGroupItem bsStyle='danger'>Vestibulum at eros</ListGroupItem>
							</ListGroup>
						</Col>
						<Col sm={6}>
							<ListGroupLink>
								<ListGroupLinkItem bsStyle='success'>Dapibus ac facilisis in</ListGroupLinkItem>
								<ListGroupLinkItem bsStyle='info'>Morbi leo risus</ListGroupLinkItem>
								<ListGroupLinkItem bsStyle='warning'>Porta ac consectetur ac</ListGroupLinkItem>
								<ListGroupLinkItem bsStyle='danger'>Vestibulum at eros</ListGroupLinkItem>
							</ListGroupLink>
						</Col>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='ListGroup'>
							<CodeXml markup='ListGroupItem' att={[{name:'bsStyle',value:'success'}]}>Dapibus ac facilisis in</CodeXml>
							<CodeXml markup='ListGroupItem' att={[{name:'bsStyle',value:'info'}]}>Morbi leo risus</CodeXml>
							<CodeXml markup='ListGroupItem' att={[{name:'bsStyle',value:'warning'}]}>Porta ac consectetur ac</CodeXml>
							<CodeXml markup='ListGroupItem' att={[{name:'bsStyle',value:'danger'}]}>Vestibulum at eros</CodeXml>
						</CodeXml>
						<CodeXml markup='ListGroupLink'>
							<CodeXml markup='ListGroupLinkItem' att={[{name:'bsStyle',value:'success'}]}>Dapibus ac facilisis in</CodeXml>
							<CodeXml markup='ListGroupLinkItem' att={[{name:'bsStyle',value:'info'}]}>Morbi leo risus</CodeXml>
							<CodeXml markup='ListGroupLinkItem' att={[{name:'bsStyle',value:'warning'}]}>Porta ac consectetur ac</CodeXml>
							<CodeXml markup='ListGroupLinkItem' att={[{name:'bsStyle',value:'danger'}]}>Vestibulum at eros</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='ul' att={[{name:'class',value:'list-group ap-list-group'}]}>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item list-group-item-success'}]}>
								Dapibus ac facilisis in
							</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item list-group-item-info'}]}>
								Morbi leo risus
							</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item list-group-item-warning'}]}>
								Porta ac consectetur ac
							</CodeXml>
							<CodeXml markup='li' att={[{name:'class',value:'list-group-item ap-list-group-item list-group-item-danger'}]}>
								Vestibulum at eros
							</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class',value:'list-group ap-list-group'}]}>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item list-group-item-success'},{name:'href',value:'#'}]}>
								Dapibus ac facilisis in
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item list-group-item-info'},{name:'href',value:'#'}]}>
								Morbi leo risus
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item list-group-item-warning'},{name:'href',value:'#'}]}>
								Porta ac consectetur ac
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item list-group-item-danger'},{name:'href',value:'#'}]}>
								Vestibulum at eros
							</CodeXml>
						</CodeXml>
					</PanelFooter>
				</Panel>

				<h2>Custom content</h2>

				<p>Add nearly any HTML within, even for linked list groups like the one below.</p>

				<Panel>
					<PanelBody>
						<h4>Example</h4>
						<ListGroup>
							<ListGroupLinkItem active>
								<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
								<ListGroupItemText>Donec id elit non mi porta gravida at eget metus.<br/>Maecenas sed diam eget risus varius blandit.</ListGroupItemText>
							</ListGroupLinkItem>
							<ListGroupLinkItem>
								<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
								<ListGroupItemText>Donec id elit non mi porta gravida at eget metus.<br/>Maecenas sed diam eget risus varius blandit.</ListGroupItemText>
							</ListGroupLinkItem>
							<ListGroupLinkItem>
								<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
								<ListGroupItemText>Donec id elit non mi porta gravida at eget metus.<br/>Maecenas sed diam eget risus varius blandit.</ListGroupItemText>
							</ListGroupLinkItem>
						</ListGroup>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='ListGroup'>
							<CodeXml markup='ListGroupLinkItem' att={[{name:'active'}]}>
								<CodeXml markup='ListGroupItemHeading'>List group item heading</CodeXml>
								<CodeXml markup='ListGroupItemText'>Donec id elit non mi porta gravida at eget metus.<CodeXml markup='br' inline/>Maecenas sed diam eget risus varius blandit.</CodeXml>
							</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>
								<CodeXml markup='ListGroupItemHeading'>List group item heading</CodeXml>
								<CodeXml markup='ListGroupItemText'>Donec id elit non mi porta gravida at eget metus.<CodeXml markup='br' inline/>Maecenas sed diam eget risus varius blandit.</CodeXml>
							</CodeXml>
							<CodeXml markup='ListGroupLinkItem'>
								<CodeXml markup='ListGroupItemHeading'>List group item heading</CodeXml>
								<CodeXml markup='ListGroupItemText'>Donec id elit non mi porta gravida at eget metus.<CodeXml markup='br' inline/>Maecenas sed diam eget risus varius blandit.</CodeXml>
							</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='ul' att={[{name:'class',value:'list-group ap-list-group'}]}>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'},{name:'active'}]}>
								<CodeXml markup='h4' att={[{name:'class',value:'list-group-item-heading ap-list-group-item-heading'}]}>
									List group item heading
								</CodeXml>
								<CodeXml markup='p' att={[{name:'class',value:'list-group-item-text ap-list-group-item-text'}]}>
									Donec id elit non mi porta gravida at eget metus.<CodeXml markup='br' inline/>Maecenas sed diam eget risus varius blandit.
								</CodeXml>
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								<CodeXml markup='h4' att={[{name:'class',value:'list-group-item-heading ap-list-group-item-heading'}]}>
									List group item heading
								</CodeXml>
								<CodeXml markup='p' att={[{name:'class',value:'list-group-item-text ap-list-group-item-text'}]}>
									Donec id elit non mi porta gravida at eget metus.<CodeXml markup='br' inline/>Maecenas sed diam eget risus varius blandit.
								</CodeXml>
							</CodeXml>
							<CodeXml markup='a' att={[{name:'class',value:'list-group-item ap-list-group-item'}]}>
								<CodeXml markup='h4' att={[{name:'class',value:'list-group-item-heading ap-list-group-item-heading'}]}>
									List group item heading
								</CodeXml>
								<CodeXml markup='p' att={[{name:'class',value:'list-group-item-text ap-list-group-item-text'}]}>
									Donec id elit non mi porta gravida at eget metus.<CodeXml markup='br' inline/>Maecenas sed diam eget risus varius blandit.
								</CodeXml>
							</CodeXml>
						</CodeXml>
					</PanelFooter>
				</Panel>

			</div>
		)
	}

}
export default Lists
