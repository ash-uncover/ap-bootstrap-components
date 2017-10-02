import React from 'react'
import Base from 'lib/components/Base'
import './Calendar.scss'

import moment from 'moment'

import Button from 'lib/components/bootstrap/button/Button'

import CalendarYearsYear from './CalendarYearsYear'

class CalendarYears extends Base {
	
	constructor(props) {
		super(props)
	}

	onYearSelected(year) {
		return function (event) {
			if (this.props.onYearSelect) {
				this.props.onYearSelect(year)
			}
		}.bind(this)
	}

	_buildYears() {
		let result = []
		for (let i = 2017; i >= 1900; i--) {
			result.push(
				<CalendarYearsYear 
					key={i}
					name={i}
					onSelect={this.onYearSelected(i)} />
			)
		}
		return result
	}

	render() { 
		return (
			<div>
				{this._buildYears()}
			</div>
		)
	}
}

export default CalendarYears