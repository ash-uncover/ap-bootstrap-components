import React from 'react'

import { Grid } from 'lib/exports'

import './Complex.scss'

class Complex extends React.Component {

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
export default Complex
