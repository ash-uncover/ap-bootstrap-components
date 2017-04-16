import React from 'react'

import './ap-code.scss'

class CodeHtml extends React.Component {

	constructor(props) {
		super(props)
	}

	buildAttributes() {
		return (this.props.att || []).map(this._buildAttribute)
	}
	_buildAttribute(att, i) {
		return (
			<span className='ap-code-xml-att' key={att.name}>
				<span className='ap-code-xml-att-name'>
					{' ' + att.name + (att.value ? '=' : '')}
				</span>
				{ att.value ?
				<span className='ap-code-xml-att-value'>
					{"'" + att.value + "'"}
				</span>
				: ''}
			</span>
		)
	}

	render() {
		return (
			<code className='ap-code-xml'>
				<span className='ap-code-xml-markup'>{'<' + this.props.markup}</span>
				{this.buildAttributes()}
				<span className='ap-code-xml-markup'>{'>'}</span>
				<span className='ap-code-xml-content'>{this.props.children}</span>
				<span className='ap-code-xml-markup'>{'</' + this.props.markup + '>'}</span>
			</code>
		)
	}
}
export default CodeHtml
