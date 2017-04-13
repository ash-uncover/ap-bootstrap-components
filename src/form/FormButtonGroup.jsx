import React from 'react'
import Base from '../Base.jsx';

import { ButtonGroup, Button } from 'react-bootstrap';

class FormButtonGroup extends Base {

	constructor(props) {
		super(props);
		
		this.formGroupProps = {className: "form-group"};
		this.controlLabelProps = {className: "control-label"};
		
		this.propsInfos = {
			required : {
				name: {},
				onChange: {},
				values: {}
			},
			optionnal : {
				defaultValue: {},
				label: {}
			}
		}
	}
	
	componentWillMount (){
		this.setState({selection: this.props.defaultValue})
	}
	
	onChange(value) {
		if  (this.props.onChange)
			this.props.onChange(null, value, this.props.name);
	}
		
	getLabel() {
		if (this.props.label) {
			return (
				<div {...this.controlLabelProps} >
					{this.props.label}
				</div>)
		}
	}
	
	_getSelectionHandler(v) {
		return function () {
			this.setState({selection: v});
			this.onChange(v);
		}.bind(this);
	}
	
	getFormControl() {
		let editable = true
		return this.props.values.map(function(v) {
			if (editable) {
				return (<Button active={this.state.selection === v} onClick={this._getSelectionHandler(v)} key={v}>{v}</Button>);
			} else {
				return (<Button active={this.state.selection === v} disabled key={v}>{v}</Button>);
			}}.bind(this))
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
		this.buildProps("FormButtonGroup");
		return (this.getFormGroup());
	}
}

export default FormButtonGroup;