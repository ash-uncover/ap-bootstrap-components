import React from 'react'
import Base from 'lib/components/Base'

import './ap-busy-bars.scss'

class BusyBars extends Base {

	constructor(props) {
		super(props)
		this.baseClasses = [ 'ap-busy-bars' ]
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
		this.buildProps('BusyBars')
		return (
			<div className={this.className}>
				<div className='ap-busy-bar ap-busy-bar-1'/>
				<div className='ap-busy-bar ap-busy-bar-2'/>
				<div className='ap-busy-bar ap-busy-bar-3'/>
				<div className='ap-busy-bar ap-busy-bar-4'/>
				<div className='ap-busy-bar ap-busy-bar-5'/>
			</div>
		);
	}
}

export default BusyBars