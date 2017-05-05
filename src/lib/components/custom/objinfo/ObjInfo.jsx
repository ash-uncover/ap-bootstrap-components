import React from 'react'
import Base from 'lib/components/Base'

import { Row, Col } from 'lib/exports'

class ObjInfo extends Base {

	constructor(props) {
		super(props);
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
			infos.push(<Row><Col md='6'>{key}</Col><Col md='6'>{this.props.obj[key]}</Col></Row>)
		}
		return infos
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

export default ObjInfo;