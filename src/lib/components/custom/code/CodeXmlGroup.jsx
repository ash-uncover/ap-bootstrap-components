import React from 'react'
import Base from 'lib/components/Base'

import './ap-code.scss'

class CodeXmlGroup extends Base {

	constructor(props) {
		super(props)
		this.baseClasses = [ 'ap-code-xml-group' ]
		this.propsInfos = {
			required : {
			},
			optionnal : {
				children: {}
			}
		}
	}


	render() {
		this.buildProps('CodeXmlGroup')
		return (
			<code className={this.className}>
				{this.props.children}
			</code>
		)
	}
}
export default CodeXmlGroup
