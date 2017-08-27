import React from 'react'
import Base from 'lib/components/Base'
import './ap-searchbar.scss'

import { FormInput, Button, Glyphicon } from 'lib/exports'

class SearchBar extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'input-group', 'ap-search-bar' ]
		// Sub component props
		this.inputProps = {
			
		}
		// Component props
		this.propsInfos = {
			required : {
			},
			optionnal : {
				onChange: { store: this.inputProps, value: this.onChange.bind(this) },
				placeholder: { store: this.inputProps },
				value: { store: this.inputProps }
			}
		}
	}


	// View callbacks //
	// --------------------------------------------------------------------------------

	onChange(event) {
		event.preventDefault();
		if (this.props.onChange) {
			this.props.onChange(event.target.value);
		}
	}


	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('SearchBar')
		return (
			<div className={this.className}>
				<FormInput className='ap-searchbar-input' {...this.inputProps} />
				<Glyphicon className='input-group-addon ap-searchbar-icon' glyph='search'/>
			</div>
		)
	}
}

export default SearchBar