import React from 'react'
// Custom components
import Base from 'Base'

class Glyphicon extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'glyphicon' ]
		// Component properties
		this.propsInfos = {
			required : {
				glyph: {}
			},
			optionnal : {}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = this.baseClasses.slice()
		classes.push('glyphicon-' + this.props.glyph)
		return classes
	}

	render() {
		this.buildProps('Glyphicon')
		return (
			<span className={this.className} />
		)
	}
}
export default Glyphicon