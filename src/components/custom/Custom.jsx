import React from 'react'

import { Grid } from 'lib/exports'

import './Custom.scss'

class Custom extends React.Component {

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
export default Custom
