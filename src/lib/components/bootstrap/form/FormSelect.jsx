import React from 'react'
import Base from 'lib/components/Base'

class BSFormSelect extends Base {

	constructor(props) {
		super(props)

		this.buildValue = this._buildValue.bind(this)
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
				defaultValue: { store: this.inputProps }
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

	_buildValues() {
		this.props.values.map(this.buildValue)
	}

	_buildValue(value) {
		if (typeof value === 'string') {
			return (
				<option key={v} value={v}>{v}</option>
			)
		} else {
			return (
				<option key={v.key} value={v.key}>{v.value}</option>
			)
		}
	}

	render() {
		this.buildProps('FormSelect')
		return (
			<select className={this.className} {...this.inputProps}>
				{this._buildValues()}
			</select>
		)
	}
}

export default BSFormSelect