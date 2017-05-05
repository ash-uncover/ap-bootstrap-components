import React from 'react'
import Base from 'lib/components/Base'

class StoreTable extends Base {

	constructor(props) {
		super(props);
		
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
		this.props.onClick(id)
	}
	
	buildTable() {
		
		let headCol = []
		let first = true;
		let allRow = []
		for (var key in this.props.data) {
			
			let item = this.props.data[key]
			let oneRow = []
			for (var key2 in item) {
				if (first)
					headCol.push((<th key={key2}>{key2}</th>))
				oneRow.push((<td key={key2}>{item[key2]}</td>))	
			}
			
			if (this.props.onClick)
				allRow.push((<tr key={item.id} onClick={this.onClick.bind(this, item.id)}>{oneRow}</tr>))
			else
				allRow.push((<tr key={item.id}>{oneRow}</tr>))
			first = false;
		}
		
		return (<table className="table table-bordered"><thead><tr>{headCol}</tr></thead><tbody>{allRow}</tbody></table>)
	}
	
	render() {
		this.buildProps("StoreTable");
		return (
			<div>
				{this.buildTable()}
			</div>
		);
	}
}

export default StoreTable