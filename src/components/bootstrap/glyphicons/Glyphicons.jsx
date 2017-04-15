import React from 'react'
import GlyphiconsData from 'components/bootstrap/glyphicons/GlyphiconsData'

import { Glyphicon } from 'lib/exports'

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
			<div>
				<h1>Glyphicons</h1>

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
