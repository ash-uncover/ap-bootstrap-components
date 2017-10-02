import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'

import Button from 'lib/components/bootstrap/button/Button'
import Col from 'lib/components/bootstrap/grid/Col'

import './Calendar.scss'

class CalendarMonthsMonth extends Base {
	
	constructor(props) {
		super(props)
	}

	onSelect(event) {
		if (this.props.onSelect) {
			this.props.onSelect(event)
		}
	}

	render() { 
		return (
			<Col xs={4}>
				<Button onClick={this.onSelect.bind(this)} block>
					{this.props.name}
				</Button>
				<br/>
			</Col>
		);
	}
}

export default CalendarMonthsMonth