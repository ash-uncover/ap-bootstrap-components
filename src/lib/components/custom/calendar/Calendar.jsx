import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'

import './Calendar.scss'
import SelectorYear from './SelectorYear'
import SelectorMonth from './SelectorMonth'
import CalendarDays from './CalendarDays'
import CalendarMonths from './CalendarMonths'
import CalendarYears from './CalendarYears'

import MomentHelper from 'lib/utils/date/MomentHelper'

moment.locale('fr')

let STATES = {
	SELECT_DAY   : 'SELECT_DAY',
	SELECT_MONTH : 'SELECT_MONTH',
	SELECT_YEAR  : 'SELECT_YEAR'
}

class Calendar extends Base {

	constructor(props) {
		super(props)
		this.state = {}
		this.componentWillReceiveProps(props, true)
	}

	componentDidMount() {
		this.state.height = this.calendar.offsetHeight
	}

	componentWillReceiveProps(props, first) {
		let m = props.moment ? MomentHelper.fromLocalDate(props.moment) : moment()
		let s = props.selected ? MomentHelper.fromLocalDate(props.selected) : moment()
		this.state.moment = m.startOf('month')
		this.state.selected = s
		this.state.state = STATES.SELECT_DAY
		this.state.specialsSuccess = this._buildSpecials(props.specialsSuccess)
		this.state.specialsInfo = this._buildSpecials(props.specialsInfo)
		this.state.specialsPrimary = this._buildSpecials(props.specialsPrimary)
		this.state.specialsWarning = this._buildSpecials(props.specialsWarning)
		this.state.specialsDanger = this._buildSpecials(props.specialsDanger)

		if (!first) this.forceUpdate()
	}

	_buildSpecials(specials) {
		let result = {}
		if (specials && specials.length) {
			for (let i = 0; i < specials.length; i++) {
				let special = specials[i]
				if (special.date) {
					let y = MomentHelper.fromLocalDate(special.date).format('YYYY')
					let m = MomentHelper.fromLocalDate(special.date).format('MM')
					let d = MomentHelper.fromLocalDate(special.date).format('DD')
					result[y] = result[y] || {}
					result[y][m] = result[y][m] || {}
					result[y][m][d] = true
				}
			}
		}
		return result
	}

	setStateSelectDay() {
		this.setState({ state: STATES.SELECT_DAY })
	}
	setStateSelectMonth() {
		this.setState({ state: STATES.SELECT_MONTH })
	}
	setStateSelectYear() {
		this.setState({ state: STATES.SELECT_YEAR })
	}

	onYearChanged(year) {
		this.setState({ 
			state: STATES.SELECT_DAY,
			moment: this.state.moment.year(year) 
		})
		if (this.props.onYearChange) {
			this.props.onYearChange([ year, this.state.moment.month() + 1, 1 ])
		}
	}
	onMonthChanged(month) {
		this.setState({ 
			state: STATES.SELECT_DAY,
			moment: this.state.moment.month(month) 
		})
		if (this.props.onMonthChange) {
			this.props.onMonthChange([ this.state.moment.year(), month + 1, 1])
		}
	}

	onDaySelect(day) {
		this.setState({ selected: day })
		if (this.props.onDaySelect) {
			this.props.onDaySelect(MomentHelper.toLocalDate(day))
		}
	}

	render() { 
		return (
			<div 
				className='ap-calendar' 
				style={{ maxHeight: this.state.height, minHeight: this.state.height }}
				ref={ (c) => this.calendar = c }>
				{this.renderContent()}
			</div>
		)
    }

    renderContent() { 
    	switch (this.state.state) {
			case STATES.SELECT_DAY: return (
				<CalendarDays 
					bsSize={this.props.bsSize || 'xsmall'}
					moment={this.state.moment}
					selected={this.state.selected}
					specialsSuccess={this.state.specialsSuccess}
					specialsInfo={this.state.specialsInfo}
					specialsPrimary={this.state.specialsPrimary}
					specialsWarning={this.state.specialsWarning}
					specialsDanger={this.state.specialsDanger}
					onYearChanged={this.onYearChanged.bind(this)}
					onYearMode={this.setStateSelectYear.bind(this)}
					onMonthChanged={this.onMonthChanged.bind(this)}
					onMonthMode={this.setStateSelectMonth.bind(this)} 
					onDaySelect={this.onDaySelect.bind(this)}/>
			)
			case STATES.SELECT_MONTH: return ( 
				<CalendarMonths
					bsSize={this.props.bsSize || 'xsmall'}
					moment={this.state.moment} 
					selected={this.state.selected} 
					onMonthSelect={this.onMonthChanged.bind(this)} />
			)
			case STATES.SELECT_YEAR: return (
				<CalendarYears
					bsSize={this.props.bsSize || 'xsmall'}
					moment={this.state.moment} 
					selected={this.state.selected} 
					onYearSelect={this.onYearChanged.bind(this)} />
			)
	    }
	}
}

export default Calendar;