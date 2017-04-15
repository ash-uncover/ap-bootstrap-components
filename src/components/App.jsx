import React from 'react'
import AppData from 'components/AppData'

import { Navbar, NavbarHeader, NavbarGroup, NavbarLink, Container, Row, Col, Button, Panel, PanelBody, PanelFooter, Glyphicon } from 'lib/exports'

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
							<h1>Glyphicons</h1>

							<h2>Available glyphs</h2>
							<p>Includes over 250 glyphs in font format from the Glyphicon Halflings set. Glyphicons Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that you include a link back to Glyphicons whenever possible.</p>
							<div>
								{Glyphicon.GLYPHS.map(function(glyph, i) {
									return (
										<div style={{display:'inline-block',width:'90px',height:'80px',background:'#EAEAEA',margin:'3px', padding:'10px'}} key={glyph} md={1}>
											<div style={{textAlign: 'center'}}><Glyphicon glyph={glyph} /></div>
											<div style={{display:'flex', justifyContent: 'center', textAlign: 'center', height: '40px'}}>{glyph}</div>
										</div>
									)
								})}
							</div>
							<br/>
							<p>Find more glyphicons on bootstrap documentation.</p>

							<h1>Buttons</h1>

							<h2>Button tags</h2>

							<h2>Options</h2>
							<p>Use '<b>bsStyle</b>' to quickly create a styled button.</p>
							<Panel className='ap-rb-buttons-style' bsStyle='default'>
								<PanelBody>
									<h4>Example</h4>
									<Button>No Style</Button>
									<Button bsStyle='default'>Default</Button>
									<Button bsStyle='primary'>Primary</Button>
									<Button bsStyle='success'>Success</Button>
									<Button bsStyle='info'>Info</Button>
									<Button bsStyle='warning'>Warning</Button>
									<Button bsStyle='danger'>Danger</Button>
									<Button bsStyle='link'>Link</Button>
								</PanelBody>
								<PanelFooter>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Unstyled button -->"}</code>
											<code style={{display:'block'}}>{"<Button>No Style</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Standard button -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='default'>Default</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='primary'>Primary</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Indicates a successful or positive action -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='success'>Success</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Contextual button for informational alert messages -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='info'>Info</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Indicates caution should be taken with this action -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='warning'>Warning</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Indicates a dangerous or potentially negative action -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='danger'>Danger</Button>"}</code>
										</p>
										<p>
											<code style={{color:'grey', display:'block'}}>{"<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->"}</code>
											<code style={{display:'block'}}>{"<Button bsStyle='link'>Link</Button>"}</code>
										</p>
								</PanelFooter>
							</Panel>

							<h2>Sizes</h2>
							<p>Fancy larger or smaller buttons? Add '<b>bsSize</b>' for additional sizes.</p>
							<Panel bsStyle='default'>
								<PanelBody>
									<h4>Example</h4>
									<p>
										<Button bsSize='lg' bsStyle='primary'>Large button</Button>
										<Button bsSize='lg' bsStyle='default'>Large button</Button>
									</p>
									<p>
										<Button bsStyle='primary'>Default button</Button>
										<Button bsStyle='default'>Default button</Button>
									</p>
									<p>
										<Button bsSize='sm' bsStyle='primary'>Small button</Button>
										<Button bsSize='sm' bsStyle='default'>Small button</Button>
									</p>
									<p>
										<Button bsSize='xs' bsStyle='primary'>Extra small button</Button>
										<Button bsSize='xs' bsStyle='default'>Extra small button</Button>
									</p>
								</PanelBody>
								<PanelFooter>
										<code style={{display:'block'}}>{"<p>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='lg' bsStyle='primary'>Large button</Button>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='lg' bsStyle='default'>Large button</Button>"}</code>
										<code style={{display:'block'}}>{"</p>"}</code>
										<code style={{display:'block'}}>{"<p>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsStyle='primary'>Default button</Button>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsStyle='default'>Default button</Button>"}</code>
										<code style={{display:'block'}}>{"</p>"}</code>
										<code style={{display:'block'}}>{"<p>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='sm' bsStyle='primary'>Small button</Button>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='sm' bsStyle='default'>Small button</Button>"}</code>
										<code style={{display:'block'}}>{"</p>"}</code>
										<code style={{display:'block'}}>{"<p>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='xs' bsStyle='primary'>Extra small button</Button>"}</code>
										<code style={{display:'block'}}>&nbsp;&nbsp;{"<Button bsSize='xs' bsStyle='default'>Extra small button</Button>"}</code>
										<code style={{display:'block'}}>{"</p>"}</code>
								</PanelFooter>
							</Panel>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}
export default App
