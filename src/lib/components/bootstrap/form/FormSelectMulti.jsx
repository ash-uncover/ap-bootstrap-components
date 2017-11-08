import React from 'react'
import Base from 'lib/components/Base'
import FormCheckbox from './FormCheckbox'

class BSFormSelectMulti extends Base {

	constructor(props) {
		super(props)

		this.buildValue = this._buildValue.bind(this)
		this.onCheckboxChange = this._onCheckboxChange.bind(this)
		// Base classes
		this.baseClasses = [ 'form-control', 'ap-form-select-multi' ]
		// Sub component props
		this.inputProps = {}
		// Component props
		this.propsInfos = {
			required : {
				values: {}
			},
			optionnal : {
				id: { store: this.inputProps },
				onChange: {},
				value: { defaultValue: [], store: this.inputProps }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------
	
	_onCheckboxChange(event, value) {
		event.stopPropagation()
		if (this.props.onChange) {
			let index = this.props.value.indexOf(value)
			let result = (this.props.value || []).slice()
			if (index === -1) {
				result.push(value)
			} else {
				result.splice(index, 1)
			}
			result.sort(function (v1, v2) {
				return this._getIndex(v1) - this._getIndex(v2)
			}.bind(this))
			this.props.onChange(event, result)
		}
	}

	// Internal methods //
	// --------------------------------------------------------------------------------

	_isSelected(value) {
		for (let i = 0; i < this.inputProps.value.length; i++) {
			let v = this.inputProps.value[i]
			if ((value.key || value) === v) {
				return true
			}
		}
		return false
	}

	_getIndex(value) {
		for (let i = 0; i < this.props.values.length; i++) {
			let v = this.props.values[i]
			if ((v.key || v) === value) {
				return i
			}
		}
		return -1
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildValue(value, index) {
		return (
			<FormCheckbox 
				key={'value-' + index} 
				onChange={this.onCheckboxChange}
				value={value.key}
				checked={this._isSelected(value)}>
				{value.value}
			</FormCheckbox>
		)
	}

	render() {
		this.buildProps('FormSelectMulti')
		return (
			<div className={this.className}>
				{this.props.values.map(this.buildValue)}
			</div>
		)
	}
}

export default BSFormSelectMulti