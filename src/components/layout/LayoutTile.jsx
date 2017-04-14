import React from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'

import Base from 'Base'

import './ap-layouts.css'

class LayoutTile extends Base {

	constructor(props) {
		super(props);
		// Sub components properties
		this.containerProps = { className: 'ap-layout ap-layout-tile' }
		this.tileProps = { className: 'ap-layout-tile-item', sm: 6, md: 4 }
		// Component properties
		this.propsInfos = {
			required: {},
			optionnal : {
				children: { defaultValue: [] }
			}
		}
	}
	
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildContent() {
		if (this.props.children) {
			let children = this.props.children
			if (Object.prototype.toString.call(children) !== '[object Array]') {
				children = [ children ]
			}
			return children.map(this.__buildTile.bind(this))
		}
	}

	__buildTile(tile, i) {
		let result = [(
			<Col key={i} {...this.tileProps} >
				{tile}
			</Col>
		)]
		if (i%2 === 1) {
			result.push( <Clearfix key={'c2' + i} visibleSmBlock/>);
		}
		if (i%3 === 2) {
			result.push( <Clearfix key={'c3' + i} visibleMdBlock visibleLgBlock/>);
		}
		return result;
	}

	render() { 
		this.buildProps('LayoutTile')
		return(
			<Row {...this.containerProps} >
				{this._buildContent()}
			</Row>	
		)
	}
}

export default LayoutTile