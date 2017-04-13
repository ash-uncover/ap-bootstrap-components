import React from 'react'
import { Col, Clearfix } from 'react-bootstrap'
import { Tile } from 'index'

import Base from 'Base'

class TileContainer extends Base {

	constructor(props) {
		super(props);

		this.propsInfos = {
			required: {},
			optionnal : {
				bsSize:  {},
				tiles: { default: [] }
			}
		}
	}
	
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildTiles() {
		return (this.props.tiles || []).map(this.__buildTile.bind(this))
	}
	__buildTile(tile, i) {
		let result = [(
			<Col key={i} sm={6} md={4}>
				<Tile 
					bsSize={this.props.bsSize}
					bsStyle={tile.bsStyle}
					title={tile.title}
					text={tile.text}
					actions={tile.actions}/>
			</Col>
		)]
		if (i%2 === 1) {
			result.push( <Clearfix key={'c2' + i} visibleSmBlock/>);
		}
		if (i%3 === 2) {
			result.push( <Clearfix key={'c3' + i} visibleMdBlock/>);
		}
		return result;
	}

	render() { 
		this.buildProps('TileContainer')
		return(
			<div className='ap-tile-container'>
				{this._buildTiles()}
			</div>	
		)
	}
}

export default TileContainer;
