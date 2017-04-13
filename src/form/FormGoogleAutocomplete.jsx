import React from 'react'
import Base from '../Base.jsx';

import GoogleAutocomplete from 'components-lib/Map/GoogleAutocomplete'

class FormGoogleAutocomplete extends Base {

	constructor(props) {
		super(props);
		
		this.formGroupProps = {className: "form-group"};
		this.controlLabelProps = {className: "control-label"};
		this.formControlProps = {className: "form-control"};
		
		this.propsInfos = {
			required : {
				name: {},
				onChange: {store: this.formControlProps, value: this.onChange.bind(this)}
			},
			optionnal : {
				placeholder: {store: this.formControlProps},
				defaultValue: {store: this.formControlProps},
				label: {},
				validator: {},
				_t: {defaultValue: "form-group", rename: "className", store: this.formGroupProps}
				
			}
		}
	}
	
	componentWillMount (){
			this.validInput(this.props.defaultValue || '');
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
	
	onChange(address) {
		if  (this.props.onChange && this.validInput(address)) {
			this.props.onChange(null, address, this.props.name);
		}
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
			<GoogleAutocomplete 
				edit={true}
				{...this.formControlProps} />
		)
	}
	
	getFormGroup() {
		if (this.props.validator)
			this.formGroupProps.className += ' ' + this.state.validationClass
		return (
			<div {...this.formGroupProps}>
				{this.getLabel()}
				{this.getFormControl()}
			</div>
		);
	}
	
	render() {
		this.buildProps("FormGoogleAutocomplete");
		return (this.getFormGroup());
	}
}

export default FormGoogleAutocomplete;