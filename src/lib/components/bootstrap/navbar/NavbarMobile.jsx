import React from 'react'
import Base from 'lib/components/Base'

import './NavbarMobile.css'

class NavbarMobile extends Base {

	constructor(props) {
		super(props)
		
		this.propsInfos = {
			required : {
				elements: {},
				onClick: {}
			},
			optionnal : {
				logo: {}
			}
		}

		this.type = {
			LINK : 0,
			DROPDOWN : 1
		}
	}
	
	buildLogo() {
		if(this.props.logo)
			return (<a className="navbar-brand" onClick={this.props.onClick.bind(this, this.props.logo.path)}>{this.props.logo.name}</a>)
	}

	buildElements(elements) {
		var newElements = []
		if(elements) {
			for(var i = 0; i < elements.length; i++) {
				if(elements[i].type == this.type.LINK)
					newElements.push(this.buildLink(elements[i]))
				else if(elements[i].type == this.type.DROPDOWN)
					newElements.push(this.buildDropdown(elements[i], i))
			}
			return (newElements)
		}
	}

	buildDropdown(dropdown, key) {
		var elements = this.buildElements(dropdown.elements)

		return (
			<li className="dropdown" key={key}>
          		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          			{dropdown.text}&nbsp;
          			<i className={"glyphicon glyphicon-" + dropdown.icon}></i>&nbsp;
          			<span className="caret"></span>
          		</a>
	          	<ul className="dropdown-menu">
		            {elements}
	          	</ul>
        	</li>
		)
	}

	buildLink(link) {
		return (<li key={link.name}><a href="#" onClick={this.props.onClick.bind(this, link.path)}>{link.name}</a></li>)
	}

	render() {
		this.buildProps("NavbarMobile");
		return (
			<div>
				<nav className="navbar navbar-default ap-navbar">
				  	<div className="container-fluid">
					    <div className="navbar-header">
					      	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
					      	</button>
					      	{this.buildLogo()}
					    </div>
					    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      	<ul className="nav navbar-nav navbar-right">
					        	{this.buildElements(this.props.elements)}
					      	</ul>
					    </div>
				  	</div>
				</nav>
			</div>
		);
	}
}

export default NavbarMobile