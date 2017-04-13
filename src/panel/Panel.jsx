import React from 'react'
import Base from 'Base'

class Panel extends Base {

	constructor(props) {
		super(props);
		// Sub components properties
		this.containerProps = { className: 'panel panel-default' }
		this.bodyProps = { className: 'panel-body' }
		this.headerProps = { className: 'panel-heading' }
		this.footerProps = { className: 'panel-footer' }
		// Component properties
		this.propsInfos = {
			required : {
			},
			optionnal : {
				header: { rename: 'children', store: this.headerProps },
				footer: { rename: 'children', store: this.footerProps },
				children: { rename: 'children', store: this.bodyProps }
			}
		}
	}
	
	render() {
		this.buildProps('Panel')
		return(
			<div {...this.containerProps} >
				{this.props.header ? <div {...this.headerProps} /> : '' }
				{this.props.children ? <div {...this.bodyProps} /> : '' }
				{this.props.footer ? <div {...this.footerProps} /> : '' }
			</div>
		)
	}
}

export default Panel
