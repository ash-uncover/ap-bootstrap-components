import React from 'react'
import AppData from 'components/AppData'

import { Navbar, Grid, Button, List } from 'lib/exports'

import Busy from 'components/custom/busy/Busy'
import GoogleAutocompletes from 'components/custom/googlemap/GoogleAutocompletes'
import Rater from 'components/custom/rater/Rater'

import Badges from 'components/bootstrap/badges/Badges'
import Buttons from 'components/bootstrap/buttons/Buttons'
import Forms from 'components/bootstrap/forms/Forms'
import Glyphicons from 'components/bootstrap/glyphicons/Glyphicons'
import Grids from 'components/bootstrap/grid/Grids'
import Labels from 'components/bootstrap/labels/Labels'
import Lists from 'components/bootstrap/lists/Lists'
import Panels from 'components/bootstrap/panels/Panels'
import Tables from 'components/bootstrap/tables/Tables'

import './App.scss'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = { scroll: 15 }
	}

	componentWillMount() {
		AppData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		AppData.unregister()
	}

	onDataUpdate() {
		this.setState({ AppData: AppData })
	}

	componentDidMount() {
		window.addEventListener('scroll', function(e){
			this.setState({ scroll: 15 + document.body.scrollTop })
		}.bind(this), true)
	}

	_navigate() {

	}


	render() {
		return (
			<div>
				<Navbar fixedTop>
					<Navbar.Header brandText='ap-react-bootstrap' brandImage='/assets/img/logo.jpg' brandLink="/" />
					<Navbar.Group>
						<Navbar.Link text='Link' link='/' />
						<Navbar.Link text='Active link'  link='/' active />
						<Navbar.Link text='Disabled link'  link='/'  disabled />
					</Navbar.Group>
					<Navbar.Group right>						
						<Navbar.Link text='Bootstrap' link='http://getbootstrap.com/' />
					</Navbar.Group>
				</Navbar>
				<Grid.Container className='ap-rb-app'>
					{this.props.children}
				</Grid.Container>
			</div>
		)
	}
}
export default App
