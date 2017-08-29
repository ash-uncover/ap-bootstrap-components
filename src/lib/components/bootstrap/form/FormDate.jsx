import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'

import FormSelect from 'lib/components/bootstrap/form/FormSelect'
import MomentHelper from 'lib/utils/date/MomentHelper'
import TextUtils from 'lib/utils/TextUtils'

moment.locale('fr')

let DAYS = [];
for (let i = 1; i < 32; i++) {
	DAYS.push({ 
		key: i, 
		value: i < 10 ? '0' + i : String(i)
	})
}
let MONTHS = moment.months().map(function(month, i) {
	return {
		key: i + 1,
		value: TextUtils.capitalize(month)
	}
})
let YEARS = []
for (let i = moment().year() + 5; i > 1899 ; i--) {
	YEARS.push({ 
		key: i, 
		value: i
	})
}

class FormDate extends Base {

	constructor(props) {
		super(props)

		this.onDateChange = this._onDateChange.bind(this)
		this.onMonthChange = this._onMonthChange.bind(this)
		this.onYearChange = this._onYearChange.bind(this)
		// Base classes
		this.baseClasses = [ 'form-inline', 'ap-form-date' ]
		// Properties storage
		this.dateProps = {}
		// Properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				onChange: {},
				date: { defaultValue: moment().date(), store: this.dateProps },
				month: { defaultValue: moment().month() + 1, store: this.dateProps },
				year: { defaultValue: moment().year(), store: this.dateProps }
			}
		}
	}


	// Callbacks functions //
	// --------------------------------------------------------------------------------

	onChange(event, value) {
		if (this.props.onChange) {
			this.props.onChange(event, value)
		}
	}

	_onDateChange(event) {
		this.onChange(event, [
			this.dateProps.year,
			this.dateProps.month,
			Number(event.target.value)
		])
	}
	_onMonthChange(event) {
		this.onChange(event, [
			this.dateProps.year,
			Number(event.target.value),
			this.dateProps.date
		])
	}
	_onYearChange(event) {
		this.onChange(event, [
			Number(event.target.value),
			this.dateProps.month,
			this.dateProps.date
		])
	}
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildDays() {
		return DAYS.map(function(v) {
			return (<option key={v.key} value={v.key}>{v.value}</option>);
		});
	}
	_buildMonths() {
		return MONTHS.map(function(v) {
			return (<option key={v.key} value={v.key}>{v.value}</option>);
		});
	}
	_buildYears() {
		return YEARS.map(function(v) {
			return (<option key={v.key} value={v.key}>{v.value}</option>);
		});
	}
	
	render() {
		this.buildProps('FormDate')
		return (
			<div className={this.className}>
				<FormSelect
					className='ap-form-date-date'
					value={this.dateProps.date}
					onChange={this.onDateChange}
					values={this._buildDays()} />
				<FormSelect
					className='ap-form-date-month'
					value={this.dateProps.month}
					onChange={this.onMonthChange}
					values={this._buildMonths()} />
				<FormSelect
					className='ap-form-date-year'
					value={this.dateProps.year}
					onChange={this.onYearChange}
					values={this._buildYears()} />
			</div>
		)
	}
}

export default FormDate;