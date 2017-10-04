import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'
import './Calendar.scss'

import Button from 'lib/components/bootstrap/button/Button'
import Glyphicon from 'lib/components/bootstrap/glyphicon/Glyphicon'

import SelectorYear from './SelectorYear'
import SelectorMonth from './SelectorMonth'
import CalendarDaysMonth from './CalendarDaysMonth'

moment.locale('fr')

class CalendarDays extends Base {

	constructor(props) {
		super(props)
		this.state = { moment: moment(props.moment) || moment() }
	}

	render() {
		return (
			<div className='ap-calendar-days'>
				<div className='ap-calendar-header'>
					<SelectorYear
						moment={this.state.moment}
						onChange={this.props.onYearChanged} 
						onYearMode={this.props.onYearMode} />
					<SelectorMonth
						moment={this.state.moment}
						onChange={this.props.onMonthChanged} 
						onMonthMode={this.props.onMonthMode} />
				</div>
				<CalendarDaysMonth
					moment={this.state.moment}
					selected={this.props.selected}
					bsSize={this.props.bsSize}
					specialsSuccess={this.props.specialsSuccess}
					specialsInfo={this.props.specialsInfo}
					specialsPrimary={this.props.specialsPrimary}
					specialsWarning={this.props.specialsWarning}
					specialsDanger={this.props.specialsDanger}
					onDaySelect={this.props.onDaySelect}/>
			</div>
		)
	}
}

export default CalendarDays