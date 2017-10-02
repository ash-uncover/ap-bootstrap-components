import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'

import Button from 'lib/components/bootstrap/button/Button'
import Glyphicon from 'lib/components/bootstrap/glyphicon/Glyphicon'

import './Calendar.scss'

moment.locale('fr')

class SelectorMonth extends Base {
	
	constructor(props) {
		super(props);
		this.state = { moment: props.moment || moment() }
	}

	onComponentWillReceiveProps(props) {
		this.setState({ moment: props.moment || moment() })
	}

	onChange() {
		if (this.props.onChange) {
			this.props.onChange(this.state.moment.month())
		}
	}
	
	_onPreviousMonth() {
		this.setState({ moment: this.state.moment.subtract(1, 'month') })
		this.onChange()
	}
	_onNextMonth() {
		this.setState({ moment: this.state.moment.add(1, 'month') })
		this.onChange()
	}

	render() { 
		let month = this.state.moment.format('MMMM')
		month = ' ' + month.charAt(0).toUpperCase() + month.slice(1) + ' '
		return (
			<div className='ap-selector-month'>
				<Button className='glyph-button' bsSize='xs' onClick={this._onPreviousMonth.bind(this)}>
					<Glyphicon glyph='chevron-left'/>
				</Button>
				<Button onClick={this.props.onMonthMode}>{month}</Button>
				<Button className='glyph-button' bsSize='xs' onClick={this._onNextMonth.bind(this)}>
					<Glyphicon glyph='chevron-right'/>
				</Button>
			</div>
		)
	}
}

export default SelectorMonth