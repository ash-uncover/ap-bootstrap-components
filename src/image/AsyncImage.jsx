import React from 'react'
// Core modules
import Dispatcher from 'core/Dispatcher'
import StoreRegistry from 'core/StoreRegistry'
// Custom components
import { BusyIndicator } from 'index'

import ImageHelper from 'helpers/ImageHelper'

import './ap-image.scss'

/**
 * props:
 *
 * @src    :
 * @height :
 * @width  :
 */
class AsyncImage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { source: null }
	}


	// State Management functions //
	// --------------------------------------------------------------------------------

	componentWillReceiveProps(props) {
		this.setState({ source: null })
		this._loadImageSource(props)
	}
	componentDidMount() {
		StoreRegistry.register('IMAGE_STORE', this, this._onStoreUpdate.bind(this))
		this.onResize = this._resize.bind(this)
		window.addEventListener('resize', this.onResize)
		this._resize()
		this._loadImageSource(this.props)
	}
	componentWillUnmount() {
		StoreRegistry.unregister('IMAGE_STORE', this)
		window.removeEventListener('resize', this.onResize)
	}

	componentDidUpdate() {
		this._resize()
	}

	_resize() {
		let maxWidth = this.props.width || 0
		let maxHeight = this.props.height || 0
		let clientWidth = this.container.getBoundingClientRect().width

		if (this.state.source) {
			let sourceWidth = this.state.source.width
			let sourceHeight = this.state.source.height

			let targetHeight = 0

			if (maxWidth && clientWidth > maxWidth) {
				// Effective width will be the specified one
				targetHeight = maxWidth * sourceHeight / sourceWidth
			} else {
				// Effective width will be the client area
				targetHeight = clientWidth * sourceHeight / sourceWidth
			}
			if (maxHeight && maxHeight < targetHeight) {
				targetHeight = maxHeight
			}
			this.container.style.height = targetHeight + 'px'
			this.image.style.width = (targetHeight * sourceWidth / sourceHeight) + 'px'

		} else {
			this.container.style.height = Math.min(clientWidth, maxHeight) + 'px'
		}
	}

	_loadImageSource(props) {
		if (props.src) {
			let source = this._getImageSource(props)
			if (!source) {
				this.setState({ loading: true })
				ImageHelper.getImage(props.src)
			} else {
				this._onImageLoaded(source)
			}
		}
	}

	_getImageSource(props) {
		let imageSource =  ImageHelper.getData(props.src)
		return imageSource
	}

	_onStoreUpdate() {
		let source = this._getImageSource(this.props)
		if (source) {
			this._onImageLoaded(source)
		}
	}

	_onImageLoaded(source) {
		this.setState({ 
			source: source, 
			loading: false 
		})
	}

	_renderContent() {
		if (this.state.source) {
			let style = {
				backgroundImage: 'url(' + this.state.source.src + ')'
			}
			return <div ref={(c) => this.image = c} className='ap-async-image-img' style={style}/>
		}
		if (this.state.loading) {
			return <BusyIndicator />
		}
		return <div />
	}

	render() {
		return (
			<div ref={(c) => this.container = c} className='ap-async-image'>
				{this._renderContent()}
			</div>
		)
	}
}
export default AsyncImage