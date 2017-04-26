import React from 'react'
import AppData from 'components/AppData'

import { Navbar, NavbarHeader, NavbarGroup, NavbarLink, Container, Row, Col, Button } from 'lib/exports'

import Busy from 'components/custom/busy/Busy'
import Rater from 'components/custom/rater/Rater'

import Badges from 'components/bootstrap/badges/Badges'
import Buttons from 'components/bootstrap/buttons/Buttons'
import Glyphicons from 'components/bootstrap/glyphicons/Glyphicons'
import Grid from 'components/bootstrap/grid/Grid'
import Labels from 'components/bootstrap/labels/Labels'
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


	render() {
		return (
			<div>
				<Navbar fixedTop>
					<NavbarHeader brandText='ap-react-bootstrap' brandImage='/assets/img/logo.jpg'/>
					<NavbarGroup>
						<NavbarLink text='Link' />
						<NavbarLink text='Active link' active/>
						<NavbarLink text='Disabled link' disabled/>
					</NavbarGroup>
					<NavbarGroup right>						
						<NavbarLink text='Bootstrap' />
					</NavbarGroup>
				</Navbar>
				<Container className='ap-rb-app'>
					<Row>
						<Col md={9}>
                            <Busy />
                            <Rater />

							<Grid />
							<Glyphicons />
							<Buttons />
							<Labels/>							
							<Badges />
							<Panels />
							<Tables />
						</Col>
                        <Col md={3} className='ap-rb-toc hidden-xs hidden-sm'>
                        	<div style={{height:this.state.scroll, transition:'height 0.3s'}}/>
                        	<ul style={{listStyleType: 'none'}}>
                            <li><Button comp='a' href='#ap-busy' bsStyle='link' bsSize='sm'>Busy</Button></li>
                            <li><Button comp='a' href='#ap-rater' bsStyle='link' bsSize='sm'>Rater</Button></li>
                            <li><Button comp='a' href='#ap-grid' bsStyle='link' bsSize='sm'>Grid</Button></li>
                            <li><Button comp='a' href='#ap-glyphicons' bsStyle='link' bsSize='sm'>Glyphicons</Button></li>
                            <li><Button comp='a' href='#ap-buttons' bsStyle='link' bsSize='sm'>Buttons</Button></li>
                            <li><Button comp='a' href='#ap-labels' bsStyle='link' bsSize='sm'>Labels</Button></li>
                            <li><Button comp='a' href='#ap-badges' bsStyle='link' bsSize='sm'>Badges</Button></li>
                            <li><Button comp='a' href='#ap-panels' bsStyle='link' bsSize='sm'>Panels</Button></li>
                            <li><Button comp='a' href='#ap-tables' bsStyle='link' bsSize='sm'>Tables</Button></li>
                            </ul>
                        </Col>
					</Row>
				</Container>
			</div>
		)
	}
}
export default App
