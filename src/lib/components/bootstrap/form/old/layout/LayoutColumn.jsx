import React from 'react'
import { Row, Col, Clearfix } from 'lib/exports'

import Base from 'lib/components/Base'

import './ap-layouts.css'

class LayoutColumn extends Base {

	constructor(props) {
		super(props);
		// Sub components properties
		this.containerProps = { className: 'ap-layout ap-layout-column' }
		this.columnProps = { className: 'ap-layout-column-item' }
		// Component properties
		this.propsInfos = {
			required: {},
			optionnal : {
				className: {},
				children: { defaultValue: [] }
			}
		}
	}
	
	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_computeSize() {
		let source = this.props.children
		if (Object.prototype.toString.call(source) !== '[object Array]') {
		    return 12
		}
		if (source && source.length) {
			let l = source.length
			if (l !== 1 && l !== 2 && l !== 3 && l !== 4) {
				return -1
			} else {
				return Math.round(12 / l)
			}
		}
		return 0;
	}

	_buildContent(size) {
		let source = this.props.children
		if (source) {
			if (Object.prototype.toString.call(source) !== '[object Array]') {
			    source = [ source ]
			}
			return source.map(function (column, index) {
				return (
					<Col key={'column-' + index} sm={size}>
						{column}
					</Col>
				)
			})
		}		
	}

	render() { 
		this.buildProps('LayoutColumn')
		let size = this._computeSize()
		if (size === - 1) {
			return (<p>ERROR: only works with 1, 2, 3 or 4 elements</p>)
		}
		return(
			<div className={this.props.className}>
				<Row {...this.containerProps} >
					{this._buildContent(size)}
				</Row>	
			</div>
		)
	}
}

export default LayoutColumn