import React from 'react'
import Base from 'lib/components/Base'

import './ap-grid.scss'

class Col extends Base {

	constructor(props) {
		super(props)
		// Base class
		this.baseClasses = [ 'ap-col' ]
		// Component properties
		this.propsInfos = {
			required : {},
			optionnal : {
				xs: {},
				sm: {},
				md: {},
				lg: {},
				xsOffset: {},
				smOffset: {},
				mdOffset: {},
				lgOffset: {},
				xsPush: {},
				smPush: {},
				mdPush: {},
				lgPush: {},
				xsPull: {},
				smPull: {},
				mdPull: {},
				lgPull: {},
				children: {}
			}
		}
	}

	_buildClasses() {
		let classes = this.baseClasses.slice()
		// Base sizes
		if (this.props.xs) classes.push('col-xs-' + this.props.xs)
		if (this.props.sm) classes.push('col-sm-' + this.props.sm)
		if (this.props.md) classes.push('col-md-' + this.props.md)
		if (this.props.lg) classes.push('col-lg-' + this.props.lg)
		// Offsets
		if (this.props.xsOffset || this.props.xsOffset === 0) classes.push('col-xs-offset-' + this.props.xsOffset)
		if (this.props.smOffset || this.props.smOffset === 0) classes.push('col-sm-offset-' + this.props.smOffset)
		if (this.props.mdOffset || this.props.mdOffset === 0) classes.push('col-md-offset-' + this.props.mdOffset)
		if (this.props.lgOffset || this.props.lgOffset === 0) classes.push('col-lg-offset-' + this.props.lgOffset)
		// Push
		if (this.props.xsPush || this.props.xsPush === 0) classes.push('col-xs-push-' + this.props.xsPush)
		if (this.props.smPush || this.props.smPush === 0) classes.push('col-sm-push-' + this.props.smPush)
		if (this.props.mdPush || this.props.mdPush === 0) classes.push('col-md-push-' + this.props.mdPush)
		if (this.props.lgPush || this.props.lgPush === 0) classes.push('col-lg-push-' + this.props.lgPush)
		// Pull
		if (this.props.xsPull || this.props.xsPull === 0) classes.push('col-xs-pull-' + this.props.xsPull)
		if (this.props.smPull || this.props.smPull === 0) classes.push('col-sm-pull-' + this.props.smPull)
		if (this.props.mdPull || this.props.mdPull === 0) classes.push('col-md-pull-' + this.props.mdPull)
		if (this.props.lgPull || this.props.lgPull === 0) classes.push('col-lg-pull-' + this.props.lgPull)
		return classes
	}
	
	render() { 
		this.buildProps('Col')
		return(
			<div className={this.className}>
				{this.props.children}
			</div>
	)}
}

export default Col