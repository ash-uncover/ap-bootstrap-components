import React from 'react'
import Base from 'lib/components/Base'

import './ap-badges.css'

class BSBadge extends Base {
	
	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'badge', 'ap-badge' ]
		this.badgeProps = {}
		// Component properties
		this.propsInfos = {
			required : {				
			},
			optionnal : {
				value: { defaultValue: 0, rename: 'children', store: this.badgeProps}
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('Badge')
		return (
			<span className={this.className} {...this.badgeProps}/>
		)
	}
}

export default BSBadge