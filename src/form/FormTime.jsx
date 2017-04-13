import React from 'react'
import Base from '../Base.jsx';


let HOURS = [];
for (let i = 0; i < 24; i++) {
	HOURS.push({ 
		key: i, 
		value: i < 10 ? '0' + i : String(i)
	});
}
let MINUTES = [];
for (let i = 0; i < 4; i++) {
	MINUTES.push({ 
		key: i*15, 
		value: i*15 < 10 ? '0' + i*15 : String(i*15)
	});
}

class FormTime extends Base {

	constructor(props) {
		super(props);
		
		this.formGroupProps = {className: "form-group"};
		this.controlLabelProps = {className: "control-label"};
		this.formControlProps1 = {className: "selectpicker form-control"};
		this.formControlProps2 = {className: "selectpicker form-control"};
		
		this.propsInfos = {
			required : {
				name: {},
				onChange: {}
			},
			optionnal : {
				defaultValue: {},
				label: {},
				_t: {rename: "onChange", store: this.formControlProps1, defaultValue: this.onHourChange.bind(this)},
				_f: {rename: "onChange", store: this.formControlProps2, defaultValue: this.onMinuteChange.bind(this)}
			}
		}
	}
	
	onChange() {
		if  (this.props.onChange)
			this.props.onChange(event, [this.currentHour, this.currentMinute], this.props.name);
	}
	
	onHourChange(event) {
		this.currentHour = event.target.value
		this.onChange()
	}
	onMinuteChange(event) {
		this.currentMinute = event.target.value
		this.onChange()
	}
		
		// Rendering functions //
	// --------------------------------------------------------------------------------

	_getDefaultHour(defaultValue) {
		return defaultValue && defaultValue[0] ? defaultValue[0] : 0;
	}
	_getDefaultMinute(defaultValue) {
		return defaultValue && defaultValue[1] ? defaultValue[1] : 0;
	}
	
	_buildHours() {
		return HOURS.map(function(v) {
			return (<option key={v.key} value={v.key}>{v.value}</option>);
		});
	}
	_buildMinutes() {
		return MINUTES.map(function(v) {
			return (<option key={v.key} value={v.key}>{v.value}</option>);
		});
	}	
		
	getLabel() {
		if (this.props.label) {
			return (
				<div {...this.controlLabelProps} >
					{this.props.label}
				</div>)
		}
	}
	
	getFormControl() {
		return (
			<div className='form-time'>
				<select {...this.formControlProps1}>
					{this._buildHours()}
				</select>
				<select {...this.formControlProps2}>
					{this._buildMinutes()}
				</select>
			</div>
		)
	}
	
	getFormGroup() {
		return (
			<div {...this.formGroupProps}>
				{this.getLabel()}
				{this.getFormControl()}
			</div>
		);
	}
	
	render() {
		this.formControlProps1.defaultValue = this._getDefaultHour(this.props.defaultValue)
		this.formControlProps2.defaultValue = this._getDefaultMinute(this.props.defaultValue)
		this.currentHour = this.formControlProps1.defaultValue;
		this.currentMinute = this.formControlProps2.defaultValue;
		
		this.buildProps("FormTime");
		return (this.getFormGroup());
	}
}

export default FormTime;