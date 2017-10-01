import React from 'react'
import Base from 'lib/components/Base'

class BDFormRadio extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'ap-form-radio' ]
		// Sub component props
		this.inputProps = {
			type: 'radio',
			onChange: this.onChange.bind(this)
		}
		// Component props
		this.propsInfos = {
			required : {
				name: { store: this.inputProps },
				value: { store: this.inputProps }
			},
			optionnal : {
				onChange: {},
				text: {},
				checked: { defaultValue: false, store: this.inputProps },
				disabled: { defaultValue: false, store: this.inputProps }
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

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.disabled) classes.push('disabled')
			if (this.props.inline) {
			classes.push('radio-inline')
		} else {
			classes.push('radio')
		}
		return classes
	}

	render() {
		this.buildProps('FormRadio')
		if (this.props.inline) {
			return (
				<label className={this.className}>
					<input {...this.inputProps} />
					{' ' + (this.props.text || '')}
				</label>
			)
		}
		return (
			<div className={this.className}>
				<label>
					<input {...this.inputProps} />
					{' ' + (this.props.text || '')}
				</label>
			</div>
		)
	}
}

export default BDFormRadio