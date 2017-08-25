import React from 'react'
import { FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';

import './ap-searchbar.css'

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: this.props.defaultValue ? this.props.defaultValue : ''
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
		return (
			<div className='ap-searchbar'>
				<input className="ap-searchbar-input" type='text' placeholder={this.props.placeholder} onChange={this.onChange.bind(this)}/>
				<i className="glyphicon glyphicon-search ap-searchbar-icon"></i>
			</div>
		);
	}

}

export default SearchBar;