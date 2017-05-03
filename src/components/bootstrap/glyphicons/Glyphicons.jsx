import React from 'react'
import GlyphiconsData from 'components/bootstrap/glyphicons/GlyphiconsData'

import { Panel, PanelBody, PanelFooter, Glyphicon, Button, ButtonGroup, CodeXml, CodeXmlComment } from 'lib/exports'

import './Glyphicons.scss'

class Glyphicons extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		GlyphiconsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		GlyphiconsData.unregister()
	}

	onDataUpdate() {
		this.setState({ GlyphiconsData: GlyphiconsData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-glyphicons' id='ap-glyphicons'>
				<h1>Glyphicons</h1>

				<h2>Examples</h2>
				<p>Use them in <code>{'<Button>'}</code>, <code>{'<ButtonGroup>'}</code> for a toolbar, navigation, or prepended form inputs.</p>

				<Panel className='ap-rb-glyphicons-examples'>
					<PanelBody>
						<h4>Example</h4>
						<div>
							<ButtonGroup>
								<Button bsStyle='default'><Glyphicon glyph='align-left'/></Button>
								<Button bsStyle='default'><Glyphicon glyph='align-center'/></Button>
								<Button bsStyle='default'><Glyphicon glyph='align-right'/></Button>
								<Button bsStyle='default'><Glyphicon glyph='align-justify'/></Button>
							</ButtonGroup>
						</div>
						<br/>
						<div>
							<ButtonGroup role='toolbar'>
								<Button bsStyle='default' bsSize='lg'>
									<Glyphicon glyph='star'/> Star
								</Button>
								<Button bsStyle='default'>
									<Glyphicon glyph='star'/> Star
								</Button>
								<Button bsStyle='default' bsSize='sm'>
									<Glyphicon glyph='star'/> Star
								</Button>
								<Button bsStyle='default' bsSize='xs'>
									<Glyphicon glyph='star'/> Star
								</Button>
							</ButtonGroup>
						</div>
					</PanelBody>
					<PanelFooter>
						<h5>React code</h5>
						<CodeXml markup='Button' att={[{name:'bsStyle',value:'default'}]}>
							<CodeXml markup='Glyphicon' att={[{name:'glyph', value:'align-left'}]} />
						</CodeXml>
						<CodeXml markup='Button' att={[{name:'bsStyle',value:'default'},{name:'bsSize',value:'lg'}]}>
							<CodeXml markup='Glyphicon' att={[{name:'glyph', value:'star'}]} after=' Star' />
						</CodeXml>
					</PanelFooter>
					<PanelFooter>
						<h5>HTML output</h5>
						<CodeXml markup='button' att={[{name:'class',value:'btn ap-button btn-default'},{name:'type',value:'button'}]}>
							<CodeXml markup='span' att={[{name:'class', value:'glyphicon ap-glyphicon glyphicon-align-left'}]} />
						</CodeXml>
						<CodeXml markup='button' att={[{name:'class',value:'btn ap-button btn-lg btn-default'},{name:'type',value:'button'}]}>
							<CodeXml markup='span' att={[{name:'class', value:'glyphicon ap-glyphicon glyphicon-star'}]} after=' Star' />
						</CodeXml>
					</PanelFooter>
				</Panel>

				<h2>Available glyphs</h2>
				<p>Includes over 250 glyphs in font format from the Glyphicon Halflings set. Glyphicons Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that you include a link back to Glyphicons whenever possible.</p>
				<div>
					{Glyphicon.GLYPHS.map(function(glyph, i) {
						return (
							<div style={{display:'inline-block',width:'90px',height:'80px',background:'#EAEAEA',margin:'3px', padding:'10px'}} key={glyph}>
								<div style={{textAlign: 'center'}}><Glyphicon glyph={glyph} /></div>
								<div style={{display:'flex', justifyContent: 'center', textAlign: 'center', height: '40px'}}>{glyph}</div>
							</div>
						)
					})}
				</div>
				<br/>
				<p>Find more glyphicons on bootstrap documentation.</p>
			</div>
		)
	}
}
export default Glyphicons