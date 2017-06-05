import React from 'react'
import Base from 'lib/components/Base'

import './Sidebar.css'

class Sidebar extends Base {

	constructor(props) {
		super(props)
		
		this.propsInfos = {
			required : {
				elements: {},
				onClick: {}
			},
			optionnal : {
			}
		}

		this.type = {
			LINK : 0,
			DROPDOWN : 1
		}
	}
	
	buildLogo() {
		if(this.props.logo)
			return (<a className="ap-sidebar-title"  onClick={this.props.onClick.bind(this, this.props.logo.path)}>{this.props.logo.name}</a>)
	}

	buildElements(elements) {
		var newElements = []
		if(elements) {
			for(var i = 0; i < elements.length; i++) {
				if(elements[i].type == this.type.LINK)
					newElements.push(this.buildLink(elements[i]))
				else if(elements[i].type == this.type.DROPDOWN)
					newElements.push(this.buildDropdown(elements[i]))
			}
			return (newElements)
		}
	}

	buildDropdown(dropdown) {
		var elements = this.buildElements(dropdown.elements)

		return (
			<li className="dropdown" key={dropdown.icon}>
          		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          			<i className={"glyphicon glyphicon-" + dropdown.icon}></i>&nbsp;
          			dropdown.text&nbsp;
          			<span className="caret"></span>
          		</a>
	          	<ul className="dropdown-menu">
		            {elements}
	          	</ul>
        	</li>
		)
	}

	buildLink(link) {
		return (<li key={link.name} onClick={this.props.onClick.bind(this, link.path)}>{link.name}</li>)
	}

	render() {
		this.buildProps("Sidebar");
		return (
			<div>
				<div className="ap-sidebar">
					{this.buildLogo(this.props.logo)}
					<ul>
						{this.buildElements(this.props.elements)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidebar