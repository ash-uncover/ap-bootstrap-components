import React from 'react';
// Custom components
import { AppFooter, APNavbar } from 'index'

export default class AppMainDefault extends React.Component {

	constructor(props) {
		super(props);
	}


	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() { return (
		<div className='ap-app-main-default' onClick={this.props.onClick}>
			<header className='no-print ap-app-main-header'>
				<APNavbar {...this.props.header} />
			</header>			
			<div className='ap-app-main-content'>
				{this.props.children}
			</div>
			<footer className='no-print ap-app-main-footer'>
				<AppFooter {...this.props.footer}/>
			</footer>
		</div>
	)}
}
