import React from 'react'
// Custom components
import Base from 'lib/components/Base'

class Glyphicon extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'glyphicon', 'ap-glyphicon' ]
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

Glyphicon.GLYPHS = [
	'asterisk', 'plus', 'euro', 'eur', 'minus', 'cloud', 'envelope', 'pencil',
	'glass', 'music', 'search', 'heart', 'star', 'star-empty', 'user', 'film',
	'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in', 'zoom-out', 'off',
	'signal', 'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt',
	'download', 'upload', 'inbox', 'play-circle', 'repeat', 'refresh', 'list-alt', 'lock',
	'option-horizontal'
]

export default Glyphicon