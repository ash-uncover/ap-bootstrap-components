import React from 'react'
import Base from 'lib/components/Base'
import moment from 'moment'

import Button from 'lib/components/bootstrap/button/Button'
import Col from 'lib/components/bootstrap/grid/Col'

import './Calendar.scss'

class CalendarYearYear extends Base {
	
	constructor(props) {
		super(props)
	}

	onSelect(event) {
		if (this.props.onSelect) {
			this.props.onSelect(event);
		}
	}

	render() { 
		return (
			<Col xs={3}>
				<Button onClick={this.onSelect.bind(this)} block>
					{this.props.name}
				</Button>
			</Col>
		)
	}
}

export default CalendarYearYear