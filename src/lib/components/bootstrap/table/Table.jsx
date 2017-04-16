import React from 'react'
import Base from 'lib/components/Base'

import './ap-tables.scss'

class BSTable extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'table', 'ap-table' ]
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				bordered: { defaultValue: false },
				striped: { defaultValue: false },
				hover: { defaultValue: false },
				condensed: { defaultValue: false },
				responsive: { defaultValue: false },
				children: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if(this.props.bordered) classes.push('table-bordered')
		if(this.props.striped) classes.push('table-striped')
		if(this.props.hover) classes.push('table-hover')
		if(this.props.condensed) classes.push('table-condensed')
		return classes
	}

	_buildTable() {
		return  (
			<table className={this.className}>
				{this.props.children}
			</table>
		)
	}
	
	render() {
		this.buildProps('Table')
		if (this.props.responsive) {
			return (
				<div className='table-responsive'>
					{this._buildTable()}
				</div>
			)
		}
		return this._buildTable()
	}
}

export default BSTable