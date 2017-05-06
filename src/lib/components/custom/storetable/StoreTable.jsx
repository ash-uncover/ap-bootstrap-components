import React from 'react'
import Base from 'lib/components/Base'
import { Table, Utils } from 'lib/exports'

class StoreTable extends Base {

	constructor(props) {
		super(props)
		// Component properties
		this.propsInfos = {
			required : {
				data: {}
			},
			optionnal : {
				onClick: {}
			}
		}
	}
	
	onClick(id) {
		if (this.props.onClick) {
			this.props.onClick(id)
		}
	}

	_buildTableHead() {
		this.headers = ['_id']
		// Resolve all fields
		for (var key in this.props.data) {
			if (this.props.data.hasOwnProperty(key)) {
				let item = this.props.data[key]
				for (var itemKey in item) {
					if (item.hasOwnProperty(itemKey) && this.headers.indexOf(itemKey) === -1) {
						this.headers.push(itemKey)
					}
				}
			}
		}
		// Build table header
		return (
			<Table.Head>
				<Table.TR>
					{this.headers.map(this._buildTableHeader)}
				</Table.TR>
			</Table.Head>
		)
	}
	_buildTableHeader(header) {
		return (
			<Table.TH key={header}>{header}</Table.TH>
		)
	}

	_buildTableBody() {
		let items = []
		for (var key in this.props.data) {
			if (this.props.data.hasOwnProperty(key)) {
				items.push(Object.assign({ '_id': key }, this.props.data[key]))
			}
		}
		return (
			<Table.Body>
				{items.map(this._buildTableItem.bind(this))}
			</Table.Body>
		)
	}
	_buildTableItem(item, index) {
		return (
			<Table.TR key={index} onClick={this.onClick.bind(this, item._id)}>
				{this.headers.map(this._buildTableProp.bind(this, item, index))}
			</Table.TR>
		)
	}
	_buildTableProp(item, index, prop) {
		return (
			<Table.TD key={prop + '-' + index}>
				{item[prop]}
			</Table.TD>
		)
	}

	render() {
		this.buildProps('StoreTable')
		return (
			<Table bordered responsive>
				{this._buildTableHead()}
				{this._buildTableBody()}
			</Table>
		)
	}
}
export default StoreTable