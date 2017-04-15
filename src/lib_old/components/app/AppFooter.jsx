import React from 'react'
import { Row, Col } from 'index'
import { LinkContainer } from 'react-router-bootstrap'

export default class AppFooter extends React.Component {

	constructor(props) {
		super(props)
	}


	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildColumns() {
		return this.props.data.map(function(column, i) {
			return (
				<Col className='' key={i} sm={4} className='ap-group'>
					<Col md={5}>
						<Row className='ap-title'>
							{column.title}
						</Row>
					</Col>
					<Col md={7}>
						{this.__buildItems(column.items)}
					</Col>
				</Col>
			);
		}.bind(this))
	}

	__buildItems(items) {
		return items.map(function(item, i) {
			return this.__buildItem(item, i, i > 0)
		}.bind(this))
	}

	__buildItem(item, key, hasOffset) {
		return (
			<Row className='ap-item' key={key}>
				<LinkContainer to={item.link}>
					<a>{item.name}</a>
				</LinkContainer>
			</Row>
		)
	}

	render() { 
		return (
		<div className='ap-app-footer container-fluid'>
			<Row>
				{this._buildColumns()}
			</Row>
		</div>
	)}
}