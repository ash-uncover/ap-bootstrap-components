import React from 'react'
import Base from 'Base'

class FormCheckbox extends Base {

	constructor(props) {
		super(props);
		
		this.formGroupProps = { className: 'checkbox' };
		this.formControlProps = {};
		
		this.propsInfos = {
			required : {
				name: {},
				onChange: { store: this.formControlProps, value: this.onChange.bind(this) }
			},
			optionnal : {
				defaultChecked: { store: this.formControlProps }
			}
		}
	}
	
	onChange(event) {
		if (this.props.onChange) {
			this.props.onChange(event, event.target.checked, this.props.name)
		}
	}
		
	getLabel() {
		if (this.props.label) {
			return (
				<div {...this.controlLabelProps} >
					{this.props.label}
				</div>
			)
		}
	}
	
	getFormControl() {
		return (
			<input type='checkbox' {...this.formControlProps} />
		)
	}
	
	getFormGroup() {
		return (
			<div {...this.formGroupProps}>
				<label>
					{this.getFormControl()}
					{this.props.name}
				</label>
			</div>
		);
	}
	
	render() {
		this.buildProps('FormCheckbox');
		return (this.getFormGroup());
	}
}

export default FormCheckbox
