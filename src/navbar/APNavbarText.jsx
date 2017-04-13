import React from 'react';

export default class APNavbarText extends React.Component {
	
	constructor(props) {
		super(props);
	}

	_buildClasses() {
		let clazz = 'ap-navbar-item ap-navbar-text navbar-text';
		if (this.props.active) {
			clazz += ' active'
		}
		return clazz;
	}

	render() { 
		return (<p className={this._buildClasses()}>{this.props.text}</p>);
	}
}
