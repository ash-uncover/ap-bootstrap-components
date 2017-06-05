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
				onClick: {},
			}
		}
		this.state = {
			order: 'ASC',
			data: this.props.data
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ data: nextProps.data });
	}
	
	onClick(id) {
		if (this.props.onClick) {
			this.props.onClick(id)
		}
	}

	onSortClick(header) {
		var data = [];
		var type = null;
		for (var item in this.state.data) {
			type = typeof this.state.data[item][header];
			data.push(this.state.data[item]);
		}
		var order = "";

		if(type == 'number') {
			order = this._sortByNumber(data, header)
		} else if(type == 'boolean') {
			order = this._sortByBoolean(data, header)
		} else if(type == 'string') {
			order = this._sortByString(data, header)
		}

		this.setState({ data: data, order: order });
	}

	_sortByNumber(data, header) {
		var order = "";
		if(this.state.order == "DESC") {
			data.sort(function(a, b) {
				return a[header] - b[header];
			})
			order = "ASC"
		} else {
			data.sort(function(a, b) {
				return b[header] - a[header];
			})
			order = "DESC"
		}
		return order;
	}

	_sortByBoolean(data, header) {
		var order = "";
		if(this.state.order == "DESC") {
			data.sort(function(a, b) {
				if(b)
					return 1;
			})
			order = "ASC"
		} else {
			data.sort(function(a, b) {
				if(b)
					return -1;
			})
			order = "DESC"
		}
		return order;
	}

	_sortByString(data, header) {
		var order = "";
		if(this.state.order == "DESC") {
			data.sort(function(a, b) {
				return a[header].localeCompare(b[header]);
			})
			order = "ASC"
		} else {
			data.sort(function(a, b) {
				return -a[header].localeCompare(b[header]);
			})
			order = "DESC"
		}
		return order;
	}



	_buildTableHead() {
		this.headers = ['_id']
		// Resolve all fields
		for (var key in this.state.data) {
			if (this.state.data.hasOwnProperty(key)) {
				let item = this.state.data[key]
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
					{this.headers.map(this._buildTableHeader.bind(this))}
				</Table.TR>
			</Table.Head>
		)
	}
	_buildTableHeader(header) {
		return (
			// <Table.TH key={header}>{header}</Table.TH>
			<Table.TH key={header}>{header}<span className="caret" onClick={this.onSortClick.bind(this, header)}></span></Table.TH>
		)
	}

	_buildTableBody() {
		let items = []
		for (var key in this.state.data) {
			if (this.state.data.hasOwnProperty(key)) {
				items.push(Object.assign({ '_id': key }, this.state.data[key]))
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
		var current_item = item[prop];
		//display boolean
		if(typeof current_item == 'boolean') {
			if(current_item == true)
				current_item = "true"
			else
				current_item = "false"
		//display null
		} else if(typeof current_item == 'object') {
			current_item = "null"
		}
		return (
			<Table.TD key={prop + '-' + index}>
				{current_item}
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