import React from 'react'
import Base from 'lib/components/Base'

class BSFormInput extends Base {

	constructor(props) {
		super(props)

		this.baseClasses = [ 'form-control', 'ap-form-input' ]
		
		this.formGroupProps = { className: 'form-group' }
		this.controlLabelProps = { className: 'control-label' }
		this.formControlProps = { className: 'form-control' }
		
		this.propsInfos = {
			required : {
				name: {},
				onChange: {store: this.formControlProps, value: this.onChange.bind(this)}
			},
			optionnal : {
				type: { defaultValue: 'text', store: this.formControlProps },
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
	
	onChange(event) {
		if  (this.props.onChange) {
			this.props.onChange(event, event.target.value, this.props.name, this.validInput(event.target.value));
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
			<input {...this.formControlProps} />
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
		this.buildProps('FormInput')
		return (this.getFormGroup())
	}
}

export default BSFormInput