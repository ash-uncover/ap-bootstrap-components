import React from 'react'
import Base from 'lib/components/Base'

import './ap-busy-bubbles.scss'

class BusyBubbles extends Base {
	
	constructor(props) {
		super(props)
        this.baseClasses = [ 'ap-busy-bubbles' ]
        this.propsInfos = {
            required : {
            },
            optionnal : {
            }
        }
	}

	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	render() {
        this.buildProps('BusyBubbles')
		return (
			<div className={this.className}>
				<div className='ap-busy-bubble ap-busy-bubble-1'/>
				<div className='ap-busy-bubble ap-busy-bubble-2'/>
				<div className='ap-busy-bubble ap-busy-bubble-3'/>
			</div>
		);
	}
}

export default BusyBubbles