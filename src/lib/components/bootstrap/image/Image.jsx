import React from 'react'
import Base from 'lib/components/Base'

import './ap-images.scss'

class Image extends Base {

	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'ap-image' ]
		// Component properties
		this.propsInfos = {
			required : {
				src: {},
				alt: {}
			},
			optionnal : {
				responsive: { defaultValue: false },
				shape: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.responsive) classes.push('img-responsive')
		if (this.props.shape) classes.push('img-' + this.props.shape)
		return classes
	}
	
	render() { 
		this.buildProps('Image')
		return(
			<img className={this.className} src={this.props.src} alt={this.props.alt}/>
	)}
}
export default Image