import React from 'react'
import Base from 'lib/components/Base'

class BSFormSelect extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'selectpicker', 'form-control', 'ap-form-select' ]
		// Sub component props
		this.inputProps = {}
		// Component props
		this.propsInfos = {
			required : {
				values: {}
			},
			optionnal : {
				id: { store: this.inputProps },
				onChange: { store: this.inputProps, value: this.onChange.bind(this) },
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------
	
	onChange(event) {
		if (this.props.onChange) {
			this.props.onChange(event, event.target.value);
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('FormSelect')
		return (
			<select className={this.className} {...this.inputProps}>
				{this.props.values.map(function(v) {console.log(v);return (<option key={v} value={v}>{v}</option>);})}
			</select>
		)
	}
}

export default BSFormSelect