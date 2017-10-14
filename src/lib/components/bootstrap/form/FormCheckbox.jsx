import React from 'react'
import Base from 'lib/components/Base'

class BSFormCheckbox extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'ap-form-checkbox' ]
		// Sub component props
		this.inputProps = {
			type: 'checkbox',
			onChange: this.onChange.bind(this)
		}
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				value: { defaultValue: '', store: this.inputProps },
				children: {},
				onChange: {},
				inline: {},
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
			classes.push('checkbox-inline')
		} else {
			classes.push('checkbox')
		}
		return classes
	}

	render() {
		this.buildProps('FormCheckbox')
		if (this.props.inline) {
			return (
				<label className={this.className}>
					<input {...this.inputProps} />
					{' ' + (this.props.children || '')}
				</label>
			)
		}
		return (
			<div className={this.className}>
				<label>
					<input {...this.inputProps} />
					{' ' + (this.props.children || '')}
				</label>
			</div>
		)
	}
}

export default BSFormCheckbox