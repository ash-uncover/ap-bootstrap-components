import React from 'react'

import './ap-code.scss'

class CodeHtmlComment extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<code className='ap-code-xml-comment'>
				{'<!-- ' + this.props.children + ' -->'}
			</code>
		)
	}
}
export default CodeHtmlComment
