import React from 'react'
import './Calendars.scss'

import { Panel, CodeXml, Calendar } from 'lib/exports'

class Calendars extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='ap-rb-section ap-ct-calendar' id='ap-calendar'>
				<h1>Calendars</h1>

				<h2>Rater star</h2>
				<p>Rater star gives a quick visual indication using stars. it takes <code>value</code> from 0 to 5 as input.</p>

				<Panel>
					<Panel.Body>
						<Calendar />
					</Panel.Body>
					<Panel.Footer>
						<h5>React code</h5>
						<CodeXml markup='Calendar' />
					</Panel.Footer>
				</Panel>
			</div>
		)
	}
}
export default Calendars
