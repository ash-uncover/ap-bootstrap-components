import React from 'react'
import Base from 'lib/components/Base'

class FormSelect extends Base {

	constructor(props) {
		super(props);
		this.formGroupProps = {className: "form-group"};
		this.controlLabelProps = {className: "control-label"};
		this.formControlProps = {className: "selectpicker form-control"};
		
		this.propsInfos = {
			required : {
				name: {},
				onChange: { store: this.formControlProps, value: this.onChange.bind(this) },
				values: {}
			},
			optionnal : {
				defaultValue: { store: this.formControlProps },
				label: {}
			}
		}
	}
	
	onChange(event) {
		if (this.props.onChange) {
			this.props.onChange(event, event.target.value, this.props.name);
		}
	}
		
	getLabel() {
		if (this.props.label) {
			return (
				<div {...this.controlLabelProps}>
					{this.props.label}
				</div>
			)
		}
	}
	
	getFormControl() {
		return (
			<select {...this.formControlProps}>
				{this.props.values.map(function(v) {return (<option key={v.key} value={v.key}>{v.value}</option>);})}
			</select>
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
		this.buildProps("FormSelect");
		return (this.getFormGroup());
	}
}

export default FormSelect;