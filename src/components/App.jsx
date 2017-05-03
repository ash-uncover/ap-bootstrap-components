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
					<Navbar.Header brandText='ap-react-bootstrap' brandImage='/assets/img/logo.jpg'/>
					<Navbar.Group>
						<Navbar.Link text='Link' link='#' onNavigate={this._navigate}/>
						<Navbar.Link text='Active link'  link='#' active onNavigate={this._navigate}/>
						<Navbar.Link text='Disabled link'  link='#'  onNavigate={this._navigate} disabled />
					</Navbar.Group>
					<Navbar.Group right>						
						<Navbar.Link text='Bootstrap' link='#'  onNavigate={this._navigate}/>
					</Navbar.Group>
				</Navbar>
				<Grid.Container className='ap-rb-app'>
					{this.props.children}
				</Grid.Container>
			</div>
		)
	}
	render2() {
		return (
			<div>
				<Navbar fixedTop>
					<Navbar.Header brandText='ap-react-bootstrap' brandImage='/assets/img/logo.jpg'/>
					<Navbar.Group>
						<Navbar.Link text='Link' link='#' onNavigate={this._navigate}/>
						<Navbar.Link text='Active link'  link='#' active onNavigate={this._navigate}/>
						<Navbar.Link text='Disabled link'  link='#'  onNavigate={this._navigate} disabled />
					</Navbar.Group>
					<Navbar.Group right>						
						<Navbar.Link text='Bootstrap' link='#'  onNavigate={this._navigate}/>
					</Navbar.Group>
				</Navbar>
				<Grid.Container className='ap-rb-app'>
					<Grid.Row>
						<Grid.Col md={9}>
						<Forms />

							<GoogleAutocompletes />
                            <Busy />
                            <Rater />

							<Grids />
							<Glyphicons />
							<Buttons />
							<Labels/>							
							<Badges />
							<Panels />
							<Lists />
							<Tables />
						</Grid.Col>
                        <Grid.Col md={3} className='ap-rb-toc hidden-xs hidden-sm'>
                        	<div style={{height:this.state.scroll, transition:'height 0.5s'}}/>
                        	<ul style={{listStyleType: 'none'}}>
	                        	<li><Button comp='a' href='#ap-rb-googlemap' bsStyle='link' bsSize='sm'>Google autocomplete</Button></li>
	                            <li><Button comp='a' href='#ap-busy' bsStyle='link' bsSize='sm'>Busy</Button></li>
	                            <li><Button comp='a' href='#ap-rater' bsStyle='link' bsSize='sm'>Rater</Button></li>
	                            <li><Button comp='a' href='#ap-grid' bsStyle='link' bsSize='sm'>Grid</Button></li>
	                            <li><Button comp='a' href='#ap-glyphicons' bsStyle='link' bsSize='sm'>Glyphicons</Button></li>
	                            <li><Button comp='a' href='#ap-buttons' bsStyle='link' bsSize='sm'>Buttons</Button></li>
	                            <li><Button comp='a' href='#ap-labels' bsStyle='link' bsSize='sm'>Labels</Button></li>
	                            <li><Button comp='a' href='#ap-badges' bsStyle='link' bsSize='sm'>Badges</Button></li>
	                            <li><Button comp='a' href='#ap-panels' bsStyle='link' bsSize='sm'>Panels</Button></li>
	                            <li><Button comp='a' href='#ap-lists' bsStyle='link' bsSize='sm'>Lists</Button></li>
	                            <li><Button comp='a' href='#ap-tables' bsStyle='link' bsSize='sm'>Tables</Button></li>
	                            { this.state.scroll > 15 ? 
	                            <li><Button comp='a' href='#' bsStyle='link' bsSize='sm'><span style={{fontSçize:'150%'}}> &uarr; </span> back to top</Button></li>
	                            : '' }
                            </ul>
                        </Grid.Col>
					</Grid.Row>
				</Grid.Container>
			</div>
		)
	}
}
export default App
