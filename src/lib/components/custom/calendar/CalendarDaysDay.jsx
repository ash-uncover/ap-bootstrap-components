import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'

import Button from 'lib/components/bootstrap/button/Button'

import './Calendar.scss'

class CalendarDaysDay extends Base {
	
	constructor(props) {
		super(props)
	}

	_computeStyle() {
		let result
		this.className = ''
		if (this._inSpecials(this.props.specialsDanger)) {
			result = 'danger'
			this.className += 'danger '
		}
		if (this._inSpecials(this.props.specialsSuccess)) {
			result = result || 'success'
			this.className += 'success '
		}
		if (this._inSpecials(this.props.specialsWarning)) {
			result = result || 'warning'
			this.className += 'warning '
		}
		if (this._inSpecials(this.props.specialsPrimary)) {
			result = result || 'primary'
			this.className += 'primary '
		}
		if (this._inSpecials(this.props.specialsInfo)) {
			result = result || 'info'
			this.className += 'info'
		}
		return result
	}

	_inSpecials(specials) {
		let y = this.props.moment.format('YYYY')
		let m = this.props.moment.format('MM')
		let d = this.props.moment.format('DD')
		if (specials && specials[y] && specials[y][m]) {
			return specials[y][m][d]
		}
	}

	onDaySelect(event) {
		if (this.props.onDaySelect) {
			this.props.onDaySelect(this.props.moment)
		}
	}

	render() { 
		let clazz = 'day';
		//clazz += this.props.notmonth ? ' notmonth' : '';
		clazz += this.props.selected ? ' selected' : ''
		//clazz += this.props.display.isBefore(moment().startOf('days')) ? ' past' : '';
		return (
			<td className={clazz}>
				<Button 
					bsSize={this.props.bsSize} 
					bsStyle={this._computeStyle()} 
					className={this.className}
					block 
					onClick={this.onDaySelect.bind(this)}>
					{this.props.moment.date()}
				</Button>
			</td>
		)
	}
}

export default CalendarDaysDay