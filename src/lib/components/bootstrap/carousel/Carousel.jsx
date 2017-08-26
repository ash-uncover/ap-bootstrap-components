import React from 'react'
// Custom components
import Base from 'lib/components/Base'

import './ap-carousels.scss'

$.fn.exists = function () {
    return this.length !== 0;
}

class BSCarousel extends Base {
	
	constructor(props) {
		super(props)

		this.onSlideChanged = this._onSlideChanged.bind(this)

		this.buildIndicator = this._buildIndicator.bind(this)
		this.buildSlide = this._buildSlide.bind(this)

		this.state = {
			currentIndex: 0
		}

		// Base class
		this.baseClasses = [ 'carousel', 'slide', 'ap-carousel' ]
		this.propStore = {}
		// Component properties
		this.propsInfos = {
			required : {
				id: {},
				slides: {}
			},
			optionnal : {
				showIndicators: { defaultValue: false, store: this.propStore },
				preventArrowCycling: { defaultValue: false, store: this.propStore },
				onSlideChange: {}
			}
		}
	}

	componentDidMount() {
		$('#' + this.props.id).on('slid.bs.carousel', this.onSlideChanged)
	}

	// View callbacks //
	// --------------------------------------------------------------------------------

	_onActiveIndexChanged(e) {
		
		
	}
	_onSlideChanged(e) {
		let index = $('.active', e.target).index()
		if (this.props.onSlideChange) {
			this.props.onSlideChange(index)
		}
		this.setState({ currentIndex: index })
	}


	// Rendering functions //
	// --------------------------------------------------------------------------------

	_buildClasses() {
		let classes = this.baseClasses.slice()
		if (this.props.block) classes.push('btn-block')
		if (this.props.active) classes.push('active')
		if (this.props.bsSize) classes.push('btn-' + this.props.bsSize)
		if (this.props.bsStyle) classes.push('btn-' + this.props.bsStyle)
		return classes
	}

	_buildIndicator(slide, index) {
		return (
			<li 
				key={index} 
				data-target={'#' + this.props.id} 
				data-slide-to={index} 
				className={index === 0 ? 'active' : ''} />
		)
	}

	_buildSlide(slide, index) {
		return (
			<div className={'item' + (index === 0 ? ' active' : '')} key={index}>
				<img src={slide.src} alt={slide.alt} />
				{slide.caption ?
					<div className='carousel-caption'>
						{slide.caption}
					</div>
				: null }
			</div>
		)
	}

	render() {
		this.buildProps('Carousel')
		return (
			<div id={this.props.id} className={this.className} data-ride='carousel' data-interval={false}>
				{this.propStore.showIndicators ?
					<ol className='carousel-indicators'>
						{this.props.slides.map(this.buildIndicator)}
					</ol>
				: null }

				<div className='carousel-inner'>
					{this.props.slides.map(this.buildSlide)}
					
				</div>

				{this.propStore.preventArrowCycling && this.state.currentIndex === 0 ? 
					null
				:
					<a className='left carousel-control' href={'#' + this.props.id} data-slide='prev'>
						<span className='glyphicon glyphicon-chevron-left'></span>
					</a>
				}
				{this.propStore.preventArrowCycling && this.state.currentIndex === this.props.slides.length - 1 ? 
					null
				:
					<a className='right carousel-control' href={'#' + this.props.id} data-slide='next'>
						<span className='glyphicon glyphicon-chevron-right'></span>
					</a>
				}
			</div>
		)
	}
}

export default BSCarousel