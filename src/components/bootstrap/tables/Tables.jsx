import React from 'react'
import TablesData from 'components/bootstrap/tables/TablesData'

import { Panel, PanelBody, PanelFooter, CodeXml, CodeXmlComment, CodeXmlGroup, Table, THead, TH, TBody, TFoot, TR, TD } from 'lib/exports'

import './Tables.scss'

class Panels extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		TablesData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		TablesData.unregister()
	}

	onDataUpdate() {
		this.setState({ TablesData: TablesData })
	}

	_buildTableHead() {
		return (
			<thead>
				<tr>
					<th>#</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Username</th>
				</tr>
			</thead>
		)
	}

	_buildTableBody() {
		return (
			<tbody>
				<tr>
					<th>1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th>3</th>
					<td>Larry</td>
					<td>the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		)
	}

	render() { return (
		<div className='ap-rb-tables'>
			<h1>Tables</h1>
			<p></p>
			
			<h2>Basic example</h2>
			<p></p>

			<Panel className='ap-rb-tables-basic'>
				<PanelBody>
					<h4>Example</h4>
					<Table>
						{this._buildTableHead()}
						{this._buildTableBody()}
					</Table>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Table'>...</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='table' att={[{name:'class',value:'table ap-table'}]}>...</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Striped rows</h2>
			<p>Use <code>{'striped'}</code> property to add zebra-striping to any table row within the <code>{'<tbody>'}</code>.</p>

			<Panel className='ap-rb-tables-striped'>
				<PanelBody>
					<h4>Example</h4>
					<Table striped>
						{this._buildTableHead()}
						{this._buildTableBody()}
					</Table>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Table' att={[{name:'striped'}]}>...</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='table' att={[{name:'class',value:'table ap-table table-striped'}]}>...</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Bordered table rows</h2>
			<p>Add <code>{'bordered'}</code> for borders on all sides of the table and cells.</p>

			<Panel className='ap-rb-tables-border'>
				<PanelBody>
					<h4>Example</h4>
					<Table bordered>
						{this._buildTableHead()}
						{this._buildTableBody()}
					</Table>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Table' att={[{name:'bordered'}]}>...</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='table' att={[{name:'class',value:'table ap-table table-bordered'}]}>...</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Hover rows</h2>
			<p>Add <code>{'hover'}</code> to enable a hover state on table rows within a <code>{'<tbody>'}</code>.</p>

			<Panel className='ap-rb-tables-hover'>
				<PanelBody>
					<h4>Example</h4>
					<Table hover>
						{this._buildTableHead()}
						{this._buildTableBody()}
					</Table>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Table' att={[{name:'hover'}]}>...</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='table' att={[{name:'class',value:'table ap-table table-hover'}]}>...</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Condensed table</h2>
			<p>Add <code>{'condensed'}</code> to make tables more compact by cutting cell padding in half.</p>

			<Panel className='ap-rb-tables-hover'>
				<PanelBody>
					<h4>Example</h4>
					<Table condensed> 
						{this._buildTableHead()}
						{this._buildTableBody()}
					</Table>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Table' att={[{name:'condensed'}]}>...</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='table' att={[{name:'class',value:'table ap-table table-condensed'}]}>...</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Contextual classes</h2>
			<p>Use contextual classes to color table rows or individual cells.</p>

			<Panel className='ap-rb-tables-styles'>
				<PanelBody>
					<h4>Example</h4>
					<Table> 
						{this._buildTableHead()}
						<tbody>
							<TR bsStyle='active'>
								<TD>1</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
							</TR>
							<TR >
								<TD>1</TD>
								<TD bsStyle='active'>Column content</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
							</TR>
							<TR bsStyle='success'>
								<TD>1</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
							</TR>
							<TR >
								<TD>1</TD>
								<TD>Column content</TD>
								<TD bsStyle='success'>Column content</TD>
								<TD>Column content</TD>
							</TR>
							<TR bsStyle='info'>
								<TD>1</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
							</TR>
							<TR >
								<TD>1</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
								<TD bsStyle='info'>Column content</TD>
							</TR>
							<TR bsStyle='warning'>
								<TD>1</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
							</TR>
							<TR >
								<TD>1</TD>
								<TD bsStyle='warning'>Column content</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
							</TR>
							<TR bsStyle='danger'>
								<TD>1</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
								<TD>Column content</TD>
							</TR>
							<TR >
								<TD>1</TD>
								<TD>Column content</TD>
								<TD bsStyle='danger'>Column content</TD>
								<TD>Column content</TD>
							</TR>
						</tbody>
					</Table>
				</PanelBody> 
				<PanelFooter>
					<h5>React code</h5>
					<CodeXmlComment>On rows</CodeXmlComment>
					<CodeXmlGroup>
						<CodeXml markup='TR' att={[{name:'bsStyle',value:'active'}]}>...</CodeXml>
						<CodeXml markup='TR' att={[{name:'bsStyle',value:'success'}]}>...</CodeXml>
						<CodeXml markup='TR' att={[{name:'bsStyle',value:'info'}]}>...</CodeXml>
						<CodeXml markup='TR' att={[{name:'bsStyle',value:'warning'}]}>...</CodeXml>
						<CodeXml markup='TR' att={[{name:'bsStyle',value:'danger'}]}>...</CodeXml>
					</CodeXmlGroup>
					<CodeXmlComment>On cells</CodeXmlComment>
					<CodeXml markup='TR'>
						<CodeXml markup='TD' att={[{name:'bsStyle',value:'active'}]}>...</CodeXml>
						<CodeXml markup='TD' att={[{name:'bsStyle',value:'success'}]}>...</CodeXml>
						<CodeXml markup='TD' att={[{name:'bsStyle',value:'info'}]}>...</CodeXml>
						<CodeXml markup='TD' att={[{name:'bsStyle',value:'warning'}]}>...</CodeXml>
						<CodeXml markup='TD' att={[{name:'bsStyle',value:'danger'}]}>...</CodeXml>
					</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXmlComment>On rows</CodeXmlComment>
					<CodeXmlGroup>
						<CodeXml markup='tr' att={[{name:'class',value:'active'}]}>...</CodeXml>
						<CodeXml markup='tr' att={[{name:'class',value:'success'}]}>...</CodeXml>
						<CodeXml markup='tr' att={[{name:'class',value:'info'}]}>...</CodeXml>
						<CodeXml markup='tr' att={[{name:'class',value:'warning'}]}>...</CodeXml>
						<CodeXml markup='tr' att={[{name:'class',value:'danger'}]}>...</CodeXml>
					</CodeXmlGroup>
					<CodeXmlComment>On cells</CodeXmlComment>
					<CodeXml markup='tr'>
						<CodeXml markup='td' att={[{name:'class',value:'active'}]}>...</CodeXml>
						<CodeXml markup='td' att={[{name:'class',value:'success'}]}>...</CodeXml>
						<CodeXml markup='td' att={[{name:'class',value:'info'}]}>...</CodeXml>
						<CodeXml markup='td' att={[{name:'class',value:'warning'}]}>...</CodeXml>
						<CodeXml markup='td' att={[{name:'class',value:'danger'}]}>...</CodeXml>
					</CodeXml>
				</PanelFooter>
			</Panel>

			<h2>Responsive tables</h2>
			<p>Create responsive tables by adding <code>responsive</code> to any <code>{'Table'}</code> to make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.</p>

			<Panel className='ap-rb-tables-styles'>
				<PanelBody>
					<h4>Example</h4>
					<Table responsive> 
						<thead>
							<tr><th>#</th><th>Table cell</th><th>Table cell</th><th>Table cell</th><th>Table cell</th><th>Table cell</th><th>Table cell</th></tr>
						</thead>
						<tbody>
							<tr><th>1</th><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td></tr>
							<tr><th>2</th><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td></tr>
							<tr><th>3</th><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td></tr>
						</tbody>
					</Table>
					<Table responsive bordered> 
						<thead>
							<tr><th>#</th><th>Table cell</th><th>Table cell</th><th>Table cell</th><th>Table cell</th><th>Table cell</th><th>Table cell</th></tr>
						</thead>
						<tbody>
							<tr><th>1</th><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td></tr>
							<tr><th>2</th><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td></tr>
							<tr><th>3</th><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td><td>Table cell</td></tr>
						</tbody>
					</Table>
				</PanelBody>
				<PanelFooter>
					<h5>React code</h5>
					<CodeXml markup='Table' att={[{name:'responsive'}]}>...</CodeXml>
					<CodeXml markup='Table' att={[{name:'responsive'},{name:'bordered'}]}>...</CodeXml>
				</PanelFooter>
				<PanelFooter>
					<h5>HTML output</h5>
					<CodeXml markup='div' att={[{name:'class',value:'table-responsive'}]}>
						<CodeXml markup='table' att={[{name:'class',value:'table ap-table'}]}>...</CodeXml>
					</CodeXml>
					<CodeXml markup='div' att={[{name:'class',value:'table-responsive'}]}>
						<CodeXml markup='table' att={[{name:'class',value:'table ap-table table-bordered'}]}>...</CodeXml>
					</CodeXml>
				</PanelFooter>
			</Panel>
		</div>
	)}
}
export default Panels
