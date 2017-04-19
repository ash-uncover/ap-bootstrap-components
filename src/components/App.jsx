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
                            <div><Button comp='a' href='#ap-busy' bsStyle='link'>Busy</Button></div>
                            <div><Button comp='a' href='#ap-rater' bsStyle='link'>Rater</Button></div>
                            <div><Button comp='a' href='#ap-grid' bsStyle='link'>Grid</Button></div>
                            <div><Button comp='a' href='#ap-glyphicons' bsStyle='link'>Glyphicons</Button></div>
                            <div><Button comp='a' href='#ap-buttons' bsStyle='link'>Buttons</Button></div>
                            <div><Button comp='a' href='#ap-labels' bsStyle='link'>Labels</Button></div>
                            <div><Button comp='a' href='#ap-badges' bsStyle='link'>Badges</Button></div>
                            <div><Button comp='a' href='#ap-panels' bsStyle='link'>Panels</Button></div>
                            <div><Button comp='a' href='#ap-tables' bsStyle='link'>Tables</Button></div>
                        </Col>
					</Row>
				</Container>
			</div>
		)
	}
}
export default App
