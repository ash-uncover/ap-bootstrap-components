import React from 'react'
import Base from 'lib/components/Base'
// Custom components
import { Form } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import LayoutColumn from 'lib_old/components/layout/LayoutColumn'
//import { Button, Row, Col, FormInput, FormSelect, FormTextArea, FormDate, FormGoogleAutocomplete, FormTime, FormCheckbox, FormButtonGroup, FormSelectMulti} from 'index'

import '../ap-forms.scss'

class IForm extends Base {

	constructor(props) {
		super(props);
		this.compo = {
			input:  this.getIFormInput.bind(this),
			select: this.getFormSelect.bind(this),
			textarea: this.getIFormTextArea.bind(this),
			date: this.getFormDate.bind(this),
			googleAutocomplete: this.getFormGoogleAutocomplete.bind(this),
			time: this.getFormTime.bind(this),
			checkbox: this.getFormCheckbox.bind(this),
			buttongroup:  this.getFormButtonGroup.bind(this),
			selectmulti:  this.getFormSelectMulti.bind(this)
		}
		this.values = {};
	}
  
	getIFormInput(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormInput key={field.name} {...field}/>);
	}
	
	getFormSelect(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormSelect key={field.name} {...field}/>);
	}
	
	getIFormTextArea(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormTextArea key={field.name} {...field}/>);
	}
  
	getFormDate(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormDate key={field.name} {...field}/>);
	}
	
	getFormGoogleAutocomplete(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormGoogleAutocomplete key={field.name} {...field}/>);
	}
	
	getFormTime(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormTime key={field.name} {...field}/>);
	}
	
	getFormCheckbox(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormCheckbox key={field.name} {...field}/>);
	}
	
	getFormButtonGroup(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormButtonGroup key={field.name} {...field}/>);
	}
	
	getFormSelectMulti(field) {
		field.onChange = this.onChange.bind(this)
		return (<FormSelectMulti key={field.name} {...field}/>);
	}
  
	onChange(event, value, name) {
		this.values[name] = value;
		if (this.props.onChange) {
			this.props.onChange(name, value)
		}
	}
  
	setDefaultValue(field) {
		if (field.defaultValue) {
			this.values[field.name] = field.defaultValue;
		}
	}
  
	onSubmit(event) {
		if (this.props.buttons.submit.onSubmit) {
			this.props.buttons.submit.onSubmit(this.values);
		} else {
			alert('No onSubmit Function');
		}
	}

	onCancel() {
		if (this.props.buttons.cancel.onCancel) {
			this.props.buttons.cancel.onCancel();
		} else {
			alert('No onCancel Function');
		}
	}
	
	getSubmitButton() {
		if (this.props.buttons.submit) {
			var buttonProps = {
				block: true,
				bsStyle: this.props.buttons.submit.bsStyle || 'success',
				bsSize: this.props.buttons.submit.bsSize,
				onClick: this.onSubmit.bind(this)
			}
			return (
				<Button {...buttonProps} >
					{this.props.buttons.submit.text || 'Submit'}
				</Button>
			)
		}
	}
	
	getCancelButton() {
		if (this.props.buttons.cancel) {
			var buttonProps = {
				block: true,
				bsStyle: this.props.buttons.cancel.bsStyle || 'primary',
				bsSize: this.props.buttons.cancel.bsSize,
				onClick: this.onCancel.bind(this)
			}
			return (
				<Button {...buttonProps}>
					{this.props.buttons.cancel.text || 'Cancel'}
				</Button>
			)
		}
	}
	
	getFooter() {
		if (this.props.buttons) {
			return (
				<LayoutColumn>
					{this.getCancelButton()}
					{this.getSubmitButton()}
				</LayoutColumn>
			)
		}
	}
  
	render() {
		var fields = this.props.fields || [];
		let FormGroups = fields.map(function(field) {
			if (!field.name)
				return (<p>NAME PROPS NOT OPTIONAL</p>)
			this.setDefaultValue(field);
			field.compo = field.compo || 'input';
			return (this.compo[field.compo](field));
		}.bind(this))
		
		return (
			<Form className='ap-i-form'>
				{FormGroups}
				<br/>
				<Col xs={12} >
					{this.getFooter()}
				</Col>
            </Form>
		);
	}
}

export default IForm;