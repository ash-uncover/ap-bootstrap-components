import React from 'react';

import './ap-busy-indicator.css';

class BusyIndicator extends React.Component {
	
	constructor(props) {
		super(props);
	}

	// Rendering functions //
	// --------------------------------------------------------------------------------
	
	render() {
		return (
			<div className='ap-busy-indicator'>
				<div className='ap-busy-indicator-item'/>
				<div className='ap-busy-indicator-item delay1'/>
				<div className='ap-busy-indicator-item delay2'/>
			</div>
		);
	}
}

export default BusyIndicator;