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
		if (this.props.xsOffset) classes.push('col-xs-offset-' + this.props.xsOffset)
		if (this.props.smOffset) classes.push('col-sm-offset-' + this.props.smOffset)
		if (this.props.mdOffset) classes.push('col-md-offset-' + this.props.mdOffset)
		if (this.props.lgOffset) classes.push('col-lg-offset-' + this.props.lgOffset)
		// Push
		if (this.props.xsPush) classes.push('col-xs-push-' + this.props.xsPush)
		if (this.props.smPush) classes.push('col-sm-push-' + this.props.smPush)
		if (this.props.mdPush) classes.push('col-md-push-' + this.props.mdPush)
		if (this.props.lgPush) classes.push('col-lg-push-' + this.props.lgPush)
		// Pull
		if (this.props.xsPull) classes.push('col-xs-pull-' + this.props.xsPull)
		if (this.props.smPull) classes.push('col-sm-pull-' + this.props.smPull)
		if (this.props.mdPull) classes.push('col-md-pull-' + this.props.mdPull)
		if (this.props.lgPull) classes.push('col-lg-pull-' + this.props.lgPull)
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