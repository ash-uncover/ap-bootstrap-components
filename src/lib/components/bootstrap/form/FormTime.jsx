import React from 'react'
import Base from 'lib/components/Base'

import FormSelect from 'lib/components/bootstrap/form/FormSelect'

let MINUTES = []
for (let i = 0; i < 60; i++) {
	MINUTES.push({ 
		key: i, 
		value: i < 10 ? '0' + i : String(i)
	})
}
let HOURS = []
for (let i = 0; i < 24; i++) {
	HOURS.push({ 
		key: i, 
		value: i < 10 ? '0' + i : String(i)
	})
}

class FormTime extends Base {

	constructor(props) {
		super(props)

		this.onMinuteChange = this._onMinuteChange.bind(this)
		this.onHourChange = this._onHourChange.bind(this)
		// Base classes
		this.baseClasses = [ 'form-inline', 'ap-form-time' ]
		// Properties storage
		this.timeProps = {}
		this.valuesProps = {
			minuteValues: MINUTES
		}
		// Properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				onChange: {},
				minute: { defaultValue: 0, store: this.timeProps },
				minuteValues: { defaultValue: 0, store: this.valuesProps },
				hour: { defaultValue: 0, store: this.timeProps }
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

	_onMinuteChange(event) {
		this.onChange(event, [
			this.timeProps.hour,
			Number(event.target.value)
		])
	}
	_onHourChange(event) {
		this.onChange(event, [
			Number(event.target.value),
			this.timeProps.minute
		])
	}
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('FormTime')
		return (
			<div className={this.className}>
				<FormSelect
					className='ap-form-time-hour'
					value={this.timeProps.hour}
					onChange={this.onHourChange}
					values={HOURS} />
				h
				<FormSelect
					className='ap-form-time-minute'
					value={this.timeProps.minute}
					onChange={this.onMinuteChange}
					values={this.valuesProps.minuteValues} />
				
			</div>
		)
	}
}

export default FormTime