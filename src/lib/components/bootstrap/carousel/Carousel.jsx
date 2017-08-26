import React from 'react'
// Custom components
import Base from 'lib/components/Base'

import './ap-carousels.scss'

class BSCarousel extends Base {
	
	constructor(props) {
		super(props)

		this.onActiveIndexChanged = this._onActiveIndexChanged.bind(this)

		this.buildIndicator = this._buildIndicator.bind(this)
		this.buildSlide = this._buildSlide.bind(this)

		// Base class
		this.baseClasses = [ 'carousel', 'slide', 'ap-carousel' ]
		// Properties store
		this.carouselProps = {
			currentIndex: 0
		}
		// Component properties
		this.propsInfos = {
			required : {
				id: {},
				slides: {}
			},
			optionnal : {
				showIndicators: { defaultValue: false },
				onSlideChange: {}
			}
		}
	}

	componentDidMount() {
		$('#' + this.props.id).on('slide.bs.carousel', this.onActiveIndexChanged)
	}

	// View callbacks //
	// --------------------------------------------------------------------------------

	_onActiveIndexChanged(e) {
		if (this.props.onSlideChange) {
			this.props.onSlideChange(this._getActiveIndex(e))
		}
	}

	_getActiveIndex(e) {
		if ($('.active.right', e.target)) {
			return ($('.active', e.target).index() + 1) % this.props.slides.length
		} else if ($('.active.left', e.target)) {
			return ($('.active', e.target).index() - 1) % this.props.slides.length
		}		
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
				className={index === this.carouselProps.currentIndex ? 'active' : ''} />
		)
	}

	_buildSlide(slide, index) {
		return (
			<div className={'item' + (index === this.carouselProps.currentIndex ? ' active' : '')} key={index}>
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

				<ol className='carousel-indicators'>
					{this.props.slides.map(this.buildIndicator)}
				</ol>

				<div className='carousel-inner'>
					{this.props.slides.map(this.buildSlide)}
					
				</div>

				<a className='left carousel-control' href={'#' + this.props.id} data-slide='prev'>
					<span className='glyphicon glyphicon-chevron-left'></span>
				</a>
				<a className='right carousel-control' href={'#' + this.props.id} data-slide='next'>
					<span className='glyphicon glyphicon-chevron-right'></span>
				</a>
			</div>
		)
	}
}

export default BSCarousel