import React from 'react';
import { APNavbarText, APNavbarLink } from 'index'

export default class APNavbarGroup extends React.Component {
	
	constructor(props) {
		super(props);
	}

	_buildItems() {
		return (this.props.items || []).map(function(item, i) {
			let item2 = Object.assign({}, item)
			delete item2.type
			switch (item.type) {
				case 'text': return (
					<li key={i}>
						<APNavbarText {...item2} />
					</li>
				);
				case 'link': return (
					<li key={i} className={item.disabled ? 'disabled' : ''}>
						<APNavbarLink {...item2} />
					</li>
				);
			}
		})
	}

	_buildClasses() {
		return 'nav navbar-nav ap-navbar-group' + (this.props.className ? ' ' + this.props.className : '')
	}

	render() { return (
		<ul className={this._buildClasses()}>
			{this._buildItems()}
		</ul>
	);}
}
