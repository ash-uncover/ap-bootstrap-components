import React from 'react'
import GridData from 'components/bootstrap/grid/GridData'

import { Navbar, NavbarHeader, NavbarGroup, NavbarLink, Container, Row, Col, Button, Panel, PanelBody, PanelFooter, CodeXml } from 'lib/exports'

import './Grid.scss'

class Grid extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		GridData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		GridData.unregister()
	}

	onDataUpdate() {
		this.setState({ GridData: GridData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-grid show-grid' id='ap-grid'>
				<h1>Grid system</h1>

				<h2>Example: Stacked-to-horizontal</h2>
				<p>Using a single set of <code>{'<Col>'}</code>, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any <code>{'<Row>'}</code>.</p>

				<Row className='show-grid'>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
					<Col md={1}>Col md 1</Col>
				</Row>

				<Row className='show-grid'>
					<Col md={8}>Col md 8</Col>
					<Col md={4}>Col md 4</Col>
				</Row>

				<Row className='show-grid'>
					<Col md={4}>Col md 4</Col>
					<Col md={4}>Col md 4</Col>
					<Col md={4}>Col md 4</Col>
				</Row>

				<Row className='show-grid'>
					<Col md={6}>Col md 6</Col>
					<Col md={6}>Col md 6</Col>
				</Row>

				<Panel className='ap-rb-grid-example-stacked'>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{1}'}]}>Col md 1</CodeXml>
						</CodeXml>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'md',value:'{8}'}]}>Col md 8</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{4}'}]}>Col md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'md',value:'{4}'}]}>Col md 4</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{4}'}]}>Col md 4</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{4}'}]}>Col md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'md',value:'{6}'}]}>Col md 6</CodeXml>
							<CodeXml markup='Col' att={[{name:'md',value:'{6}'}]}>Col md 6</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-1'}]}>Col md 1</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-8'}]}>Col md 8</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-4'}]}>Col md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-4'}]}>Col md 4</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-4'}]}>Col md 4</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-4'}]}>Col md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-6'}]}>Col md 6</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-6'}]}>Col md 6</CodeXml>
						</CodeXml>

					</PanelFooter>
				</Panel>

				<h2>Example: Fluid container</h2>

				<h2>Example: Mobile and desktop</h2>

				<p>Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding <code>xs</code> <code>md</code> to your columns. See the example below for a better idea of how it all works.</p>

				<Row className='show-grid'>
					<Col xs={12} md={8}>Col xs 12 md 8</Col>
					<Col xs={6} md={4}>Col xs 6 md 4</Col>
				</Row>

				<Row className='show-grid'>
					<Col xs={6} md={4}>Col xs 6 md 4</Col>
					<Col xs={6} md={4}>Col xs 6 md 4</Col>
					<Col xs={6} md={4}>Col xs 6 md 4</Col>
				</Row>

				<Row className='show-grid'>
					<Col xs={6}>Col xs 6</Col>
					<Col xs={6}>Col xs 6</Col>
				</Row>

				<Panel className='ap-rb-grid-example-mobile'>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'xs',value:'{12}'},{name:'md',value:'{8}'}]}>Col xs 12 md 8</CodeXml>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'},{name:'md',value:'{4}'}]}>Col xs 6 md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'},{name:'md',value:'{4}'}]}>Col xs 6 md 4</CodeXml>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'},{name:'md',value:'{4}'}]}>Col xs 6 md 4</CodeXml>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'},{name:'md',value:'{4}'}]}>Col xs 6 md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'}]}>Col xs 6</CodeXml>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'}]}>Col xs 6</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-12 col-md-8'}]}>Col xs 12 md 8</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6 col-md-4'}]}>Col xs 6 md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6 col-md-4'}]}>Col xs 6 md 4</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6 col-md-4'}]}>Col xs 6 md 4</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6 col-md-4'}]}>Col xs 6 md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6'}]}>Col xs 6</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6'}]}>Col xs 6</CodeXml>
						</CodeXml>

					</PanelFooter>
				</Panel>

				<h2>Example: Mobile, tablet, desktop</h2>

				<p>Build on the previous example by creating even more dynamic and powerful layouts with tablet <code>sm</code> attribute.</p>

				<Row className='show-grid'>
					<Col xs={12} sm={6} md={8}>Col xs 12 sm 6 md 8</Col>
					<Col xs={6} md={4}>Col xs 6 md 4</Col>
				</Row>

				<Row className='show-grid'>
					<Col xs={6} sm={4}>Col xs 6 sm 4</Col>
					<Col xs={6} sm={4}>Col xs 6 sm 4</Col>
					<Col xs={6} sm={4}>Col xs 6 sm 4</Col>
				</Row>

				<Panel className='ap-rb-grid-example-tablet'>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'xs',value:'{12}'},{name:'sm',value:'{6}'},{name:'md',value:'{8}'}]}>Col xs 12 sm 6 md 8</CodeXml>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'},{name:'md',value:'{4}'}]}>Col xs 6 md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='Row'>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'},{name:'sm',value:'{4}'}]}>Col xs 6 sm 4</CodeXml>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'},{name:'sm',value:'{4}'}]}>Col xs 6 sm 4</CodeXml>
							<CodeXml markup='Col' att={[{name:'xs',value:'{6}'},{name:'sm',value:'{4}'}]}>Col xs 6 sm 4</CodeXml>
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-12 col-md-8'}]}>Col xs 12 sm 6 md 8</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6 col-md-4'}]}>Col xs 6 md 4</CodeXml>
						</CodeXml>
						<CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6 col-sm-4'}]}>Col xs 6 sm 4</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6 col-sm-4'}]}>Col xs 6 sm 4</CodeXml>
							<CodeXml markup='div' att={[{name:'class',value:'ap-col col-xs-6 col-sm-4'}]}>Col xs 6 sm 4</CodeXml>
						</CodeXml>
					</PanelFooter>
				</Panel>

			</div>
		)
	}

}
export default Grid
