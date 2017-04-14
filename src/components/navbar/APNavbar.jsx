import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { APNavbarHeader, APNavbarGroup, Col } from 'index'

import './APNavbar.css'

export default class APNavbar extends React.Component {
	
	constructor(props) {
		super(props);
	}

	_buildClasses() {
		let clazz = 'ap-navbar navbar navbar-default' + (this.props.className ? ' ' + this.props.className : '')
		if (this.props.inverse) {
			clazz += ' navbar-inverse'
		}
		if (this.props.fixedTop) {
			clazz += ' navbar-fixed-top'
		}
		if (this.props.fixedBottom) {
			clazz += ' navbar-fixed-bottom'
		}
		if (this.props.staticTop) {
			clazz += ' navbar-static-top'
		}
		return clazz
	}

	render() { return (
		<nav className={this._buildClasses()}>
		{ !!this.props.right ?
			<div className='container-fluid'>
				<Col sm={4}>
					<APNavbarHeader {...this.props.header} />
					<APNavbarGroup {...this.props.left} />
				</Col>		
				<Col sm={4}>
					<APNavbarGroup {...this.props.middle} />
				</Col>
				<Col sm={4}>
					<APNavbarGroup {...this.props.right} />
				</Col>
			</div>	
		:
			<div className='container-fluid'>
				<Col sm={4}>
					<APNavbarHeader {...this.props.header} />
					<APNavbarGroup {...this.props.left} />
				</Col>
				<Col sm={8}>
					<APNavbarGroup {...this.props.middle} />
				</Col>
			</div>
		}
		</nav>
		);
	}
}
