import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'

import Button from 'lib/components/bootstrap/button/Button'
import Glyphicon from 'lib/components/bootstrap/glyphicon/Glyphicon'

import './Calendar.scss';

class SelectorYear extends Base {
	
	constructor(props) {
		super(props);
		this.state = { moment: props.moment || moment() }
	}

	onComponentWillReceiveProps(props) {
		this.setState({ moment: props.moment || moment() })
	}

	onChange() {
		if (this.props.onChange) {
			this.props.onChange(this.state.moment.year())
		}
	}
	
	_onPreviousYear() {
		this.setState({ moment: this.state.moment.subtract(1, 'year') })
		this.onChange()
	}
	_onNextYear() {
		this.setState({ moment: this.state.moment.add(1, 'year') })
		this.onChange()
	}

	render() { 
		return (
			<div className='ap-selector-year'>
				<Button className='glyph-button' bsSize='xs' onClick={this._onPreviousYear.bind(this)}>
					<Glyphicon glyph='chevron-left'/>
				</Button>
				<Button onClick={this.props.onYearMode}>{' ' + this.state.moment.year() + ' '}</Button>				
				<Button className='glyph-button' bsSize='xs' onClick={this._onNextYear.bind(this)}>
					<Glyphicon glyph='chevron-right'/>
				</Button>
			</div>
		)
	}
}

export default SelectorYear