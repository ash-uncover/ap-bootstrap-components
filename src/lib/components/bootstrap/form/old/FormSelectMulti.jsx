import React from 'react'
import Base from 'lib/components/Base'

import { ButtonGroup, Button } from 'react-bootstrap';
import { FormGroup, Checkbox, Row } from 'react-bootstrap'

class FormSelectMulti extends Base {

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
				return (
				<Row key={v}>
					<Checkbox disabled={!editable} 
							checked={this.state.selection === v}
							onChange={this._getSelectionHandler(v)}
							inline >
						{v}
					</Checkbox>
				</Row>
				)}.bind(this))
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
		this.buildProps("FormSelectMulti");
		return (this.getFormGroup());
	}
}

export default FormSelectMulti;