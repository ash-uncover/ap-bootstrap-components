import React from 'react'

import { Grid } from 'lib/exports'

import './Bootstrap.scss'

class Bootstrap extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid.Row>
				{this.props.children}
			</Grid.Row>
		)
	}

}
export default Bootstrap
