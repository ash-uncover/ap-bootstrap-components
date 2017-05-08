import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'

import { FormGroup, FormControl, ControlLabel, Col, OverlayTrigger, Popover, Button } from 'react-bootstrap'

import Calendar from 'components-lib/Calendar/Calendar'

import MomentHelper from 'utils/moment/MomentHelper'

moment.locale('fr');
class FormDate extends Base {

	constructor(props) {
		super(props);
		
		this.formGroupProps = {className: "form-group"};
		this.controlLabelProps = {className: "control-label"};
		
		this.propsInfos = {
			required : {
				name: {},
				onChange: {}
			},
			optionnal : {
				defaultValue: {},
				label: {},
				validator: {},
				_t: {defaultValue: "form-group", rename: "className", store: this.formGroupProps}
				
			}
		}
	}
	
	componentWillMount (){
		let date = this._getDefaultDate()
		this.validInput(date);
		this.setState({date: date})
	}
	
	validInput(value) {
		if (!this.props.validator)
			return true
		let myState = this.props.validator.getState(value)
		if (myState == 'error') {
			this.setState({validationClass: "has-error has-feedback"})
			return false
		} else {
			this.setState({validationClass: "has-success has-feedback"})
			return true
		}
	}
	
	onChange(date) {
		this.setState({date: date})
		if  (this.props.onChange && this.validInput(date)) {
			this.props.onChange(null, date, this.props.name);
		}
	}

	_getDefaultDate() {
		return this.props.defaultValue || MomentHelper.toLocalDate(moment());
	}

	getLabel() {
		if (this.props.label) {
			return (
				<div {...this.controlLabelProps} >
					{this.props.label}
				</div>)
		}
	}
	
	getFormGroup() {
		if (this.props.validator)
			this.formGroupProps.className += ' ' + this.state.validationClass
		return (
			<div {...this.formGroupProps}>
				{this.getLabel()}
				{this.getFormControlEditable()}
			</div>
		);
	}
	
	_buildOverlay() {
		return (
			<Popover id='formDateOverlay' title='Popover'>
				<Calendar 
					moment={this.state.date}
					selected={this.state.date}
					bsSize='xsmall'
					onDaySelect={this.onChange.bind(this)}/>
			</Popover>
		);
	}
	
	getFormControlEditable() {
		return (
			<OverlayTrigger trigger='click' placement='bottom' overlay={this._buildOverlay()} rootClose>
				<FormControl 
					type='text'
					value={MomentHelper.localDateToHumanDate(this.state.date)}/>
			</OverlayTrigger>	
		);
	}
	
	render() {
		this.buildProps("FormDate");
		return (this.getFormGroup());
	}
}

export default FormDate;