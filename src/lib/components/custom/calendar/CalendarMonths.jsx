import React from 'react'
import Base from 'lib/components/Base'
import './Calendar.scss'

import CalendarMonthsMonth from './CalendarMonthsMonth'

import moment from 'moment'
moment.locale('fr')

class CalendarMonths extends Base {
	
	constructor(props) {
		super(props)
	}

	onMonthSelected(month) {
		return function (event) {
			if (this.props.onMonthSelect) {
				this.props.onMonthSelect(month)
			}
		}.bind(this)
	}

	_buildMonths() {
		let result = []
		let months = moment.months()
		for (let i = 0; i < months.length ; i++) {
			let month = months[i]
			let first = String(month.charAt(0))
			result.push(
				<CalendarMonthsMonth 
					key={i}
					name={first.toUpperCase() + month.substring(1)}
					onSelect={this.onMonthSelected(i)} />
			)
		}
		return result
	}

	render() { 
		return (
			<div>{this._buildMonths()}</div>
		)
	}
}

export default CalendarMonths