import React from 'react'
import Base from 'lib/components/Base'

class FormTextArea extends Base {

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
				rows: {store: this.formControlProps},
				cols: {store: this.formControlProps},
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
	
	onChange(event) {
		if  (this.props.onChange && this.validInput(event.target.value)) {
			this.props.onChange(event, event.target.value, this.props.name);
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
			<textarea {...this.formControlProps} />
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
		this.buildProps("FormTextArea");
		return (this.getFormGroup());
	}
}

export default FormTextArea;