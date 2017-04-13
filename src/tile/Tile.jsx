import React from 'react'
import { Panel, Row, Col, Glyphicon } from 'react-bootstrap'
// Custom components
import Base from 'Base'
import { Button } from 'index'

import './ap-tiles.css'

class Tile extends Base {

	constructor(props) {
		super(props);

		this.buttonProps = {}

		this.propsInfos = {
			required : {
				title: {},
				text:  {}
			},
			optionnal : {
				bsSize:  { defaultValue: 'xsmall', store: this.buttonProps },
				bsStyle:  {},
				actions: { defaultValue: [] },
				footer: {}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildHeader() {
		if (this.props.actions && this.props.actions.length) {
			return (
				<Row className='ap-tile-header'>
					<Col xs={7} className='ap-tile-title'>
						{this.props.title}
					</Col>
					<Col xs={5} className='ap-tile-actions'>
						{this.props.actions.map(this.__buildAction.bind(this))}
					</Col>
				</Row>
			)
		}
		return (
			<Row className='ap-tile-header'>
				<Col xs={12} className='ap-tile-title'>
					{this.props.title}
				</Col>
			</Row>
		);
	}

	_buildFooter() {
		if (this.props.footer) {
			return (
				<Row className='ap-tile-footer'>
					<Col xs={12} className='ap-tile-footer-content'>
						{this.props.footer}
					</Col>
				</Row>
			)
		}
	}

	__buildAction(action, index) {
		let propsInfo = {
			className: action.className || '',
			onClick: action.callback,
			tooltip: action.tooltip,
			bsStyle: action.bsStyle,
			bsSize: 'xs',
			confirm: action.confirm
		}
		return (
			<Button key={index} {...this.buttonProps} {...propsInfo} >
			{ action.glyph ? 
				<Glyphicon glyph={action.glyph}/>
			:
				<div>{action.text}</div>
			}
			</Button>
		);
	}

	_buildContent() {
		let result = [];
		if (typeof this.props.text === 'string') {
			return this.props.text;
		}
		let l = (this.props.text || []).length;
		for (let i = 0; i < l; i++) {
			result.push(<div key={i}>{this.props.text[i]}</div>);
		}
		return result;
	}
	
	render() { 
		this.buildProps('Tile')
		return (
			<Panel 
				bsStyle={this.props.bsStyle} 
				header={this._buildHeader()}
				footer={this._buildFooter()}
				className='ap-tile'>
				{this._buildContent()}
			</Panel>
		);
	}
}

export default Tile;
