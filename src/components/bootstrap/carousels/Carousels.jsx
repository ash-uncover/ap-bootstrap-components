import React from 'react'
import CarouselsData from 'components/bootstrap/Carousels/CarouselsData'

import { Carousel, Panel, PanelHeader, PanelBody, PanelFooter, CodeXml, CodeXmlComment } from 'lib/exports'

import './Carousels.scss'

class Carousels extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		CarouselsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		CarouselsData.unregister()
	}

	onDataUpdate() {
		this.setState({ CarouselsData: CarouselsData })
	}

	onSlideChange(index) {
		this.setState({ currentSlide: '(displaying slide n°' + index + ')' })
	}

	render() { 
		let slides = [
			{ src: '/assets/img/car1.jpg', alt: 'img1', caption: 'Image 1' },
			{ src: '/assets/img/car2.jpg', alt: 'img2', caption: 'Image 2' },
			{ src: '/assets/img/car3.jpg', alt: 'img3', caption: 'Image 3' }
		]
		return (
			<div className='ap-rb-section ap-rb-carousels' id='ap-carousels'>
				<h1>Carousels</h1>

				<h2>Examples</h2>

				<h2>Options</h2>
				<p>Use <code>bsStyle</code> to quickly create a styled button.</p>
				<Panel className='ap-rb-carousels-style' bsStyle='default'>
					<PanelBody>
						<h4>Example {this.state.currentSlide}</h4>
						<Carousel 
							id='carousel-1' 
							slides={slides} 
							showIndicators={false}
							preventArrowCycling={true}
							onSlideChange={this.onSlideChange.bind(this)}/>
					</PanelBody>
					<PanelFooter>
					</PanelFooter>
				</Panel>
			</div>
		)
	}
}
export default Carousels
