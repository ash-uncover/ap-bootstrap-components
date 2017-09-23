import React from 'react'
import Base from 'lib/components/Base'
import GoogleMapHelper from './GoogleMapHelper.js'

import './GoogleMap.scss'

class GoogleMap extends Base {

	constructor(props) {
		super(props)
		//
		this.mapListener
		// Base classes
		this.baseClasses = [ 'ap-google-map' ]
		this.state = {}
		// Sub-component properties
		this.mapProps = {}
		// Component properties
		this.propsInfos = {
			required : {
				centerLattitude: {},
				centerLongitude: {}
			},
			optionnal : {
				markers: { defaultValue: [] },
				circles: { defaultValue: [] },
				onMapClicked: {},
				zoom: { defaultValue: 12, storage: this.mapProps },
				streetViewControl: { defaultValue: false, storage: this.mapProps },
				mapTypeIds: { defaultValue: [], storage: this.mapProps },
				clickableIcons: { defaultValue: false, storage: this.mapProps }
			}
		}
	}

	componentDidMount() {
		this.buildProps('GoogleMap')
		let center = new google.maps.LatLng(
			this.props.centerLattitude,
			this.props.centerLongitude
		)

		let mapOptions = {
			center: center,
			zoom: this.mapProps.zoom || 12,
			streetViewControl: this.mapProps.streetViewControl || false,
			mapTypeControlOptions: { mapTypeIds: this.mapProps.mapTypeIds || [] },
			clickableIcons: this.mapProps.clickableIcons || false
		}

		this.mapHelper = new GoogleMapHelper(this.mapDiv, mapOptions)
		
		if (this.props.onMapClicked) {
			this.mapListener = google.maps.event.addListener(this.mapHelper.map , 'click', function(e) {
				this.props.onMapClicked({
					lattitude: e.latLng.lat(),
					longitude: e.latLng.lng()
				});
			}.bind(this))
		}
		
		this._buildMarkers()
		this._buildCircles()
		
	}   
	
	shouldComponentUpdate (nextProps, nextState) {  
		this._updateMapListener(nextProps)
		this.mapHelper.updateMarkers(nextProps.markers)
		this.mapHelper.updateCircles(nextProps.circles)
		return false
	}
	
	_updateMapListener(nextProps) {
		if (nextProps.onMapClicked) {
			if (this.props.onMapClicked != nextProps.onMapClicked) {
				if (this.mapListener) {
					google.maps.event.removeListener(this.mapListener)
				}
				this.mapListener =  google.maps.event.addListener(this.mapHelper.map , 'click', function(e) {
					nextProps.onMapClicked({
						lattitude: e.latLng.lat(),
						longitude: e.latLng.lng()
					});
				});
			}
		}
	}
	
	_buildMarkers() {
		let l = (this.props.markers || []).length
		for (let i = 0; i < l; i++) {
			this.mapHelper.addMarker(this.props.markers[i])
		}
	}

	_buildCircles() {
		let l = (this.props.circles || []).length
		for (let i = 0; i < l; i++) {
			let circle = this.props.circles[i]
			this.mapHelper.addCircle(circle)
		}
	}

	render() {
		this.buildProps('GoogleMap')
		return (
			<div ref={(c) => this.mapDiv = c} className={this.className}></div>
		)
	}
}
export default GoogleMap
