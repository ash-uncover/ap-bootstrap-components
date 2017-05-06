import React from 'react'
import StoresData from 'components/complex/stores/StoresData'

import { Grid, Table, Panel, CodeXml, StoreTable } from 'lib/exports'

import './Stores.scss'

class Stores extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		StoresData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		StoresData.unregister()
	}

	onDataUpdate() {
		this.setState({ data: StoresData })
	}

	onClick(e) {
		console.log(e)
	}
	render() {
		return (
			<div className='ap-rb-section ap-cp-stores' id='ap-cp-stores'>
				<h1>Stores component</h1>

				<p>.</p>

				<h2>Store Table</h2>
				<p>The <code>{'<StoreTable>'}</code> component .</p>

				<Panel>
					<Panel.Body>
						<h4>Example</h4>
				
						<StoreTable 
							data={{data1: { id: 'id1', name: 'name1', value: 'test1' }, data2: { id: 'id2', value: 'test2' }}}
							onClick={this.onClick}/>

					</Panel.Body>
				</Panel>

			</div>
		)
	}
}
export default Stores
