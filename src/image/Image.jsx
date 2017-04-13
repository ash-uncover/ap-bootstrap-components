import React from 'react'
import Base from '../Base'

import './ap-image.scss'

class Image extends Base {

	constructor(props) {
		super(props)
		this.imageProps = {}
		this.propsInfos = {
			required : {
				src: { store: this.imageProps }
			},
			optionnal : {
				rounded: { rename: 'className', store: this.imageProps }
			}
		}
	}
	
	render() {
		this.buildProps('Image')
		return(
			<img {...this.imageProps }/>
		)
	}
}

export default Image
