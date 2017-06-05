import React from 'react'
import Base from 'lib/components/Base'

import { Row, Col, Utils } from 'lib/exports'

import './ObjInfo.css'

class ObjInfo extends Base {

	constructor(props) {
		super(props)
		// Component properties
		this.propsInfos = {
			required : {
				obj: {}
			},
			optionnal : {
			}
		}
	}
	
	buildInfos() {
		let infos = []
		for (var key in this.props.obj) {
			if (this.props.obj.hasOwnProperty(key)) {
				infos.push(this._buildInfo(key, this.props.obj[key]))
			}
		}
		return infos
	}

	_buildInfo(key, obj) {
		return (
			<Row key={key}>
				<Col md={4}>{key} :</Col>
				<Col md={8}>{obj}</Col>
			</Row>
		)
	}
	
	render() {
		this.buildProps('ObjInfo')
		return(
			<div className='container'>
				{this.buildInfos()}
			</div>
		)
	}
}
export default ObjInfo