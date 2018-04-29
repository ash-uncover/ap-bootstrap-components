import React from 'react'
import PropTypes from 'prop-types'
import Base from 'lib/components/Base'
import GoogleMapHelper from './GoogleMapHelper.js'

import './GoogleMap.scss'

/**
 *
 * STYLE
 * https://developers.google.com/maps/documentation/javascript/style-reference?hl=fr
 *
 * Style elements
 * - all (par défaut) sélectionne tous les composants.
 * - administrative sélectionne toutes les zones administratives. Les styles ont uniquement un effet sur les libellés des zones administratives, pas sur les frontières géographiques et le remplissage.
 *   - administrative.country sélectionne les pays.
 *   - administrative.land_parcel sélectionne les parcelles de terrain.
 *   - administrative.locality sélectionne les localités.
 *   - administrative.neighborhood sélectionne les quartiers.
 *   - administrative.province sélectionne les provinces.
 * - landscape sélectionne tous les paysages.
 *   - landscape.man_made sélectionne les structures construites par l'homme.
 *   - landscape.natural sélectionne les composants naturels.
 *   - landscape.natural.landcover sélectionne les composants de couverture terrestre.
 *   - landscape.natural.terrain sélectionne les composants de terrain.
 * - poi sélectionne tous les points d'intérêt.
 *   - poi.attraction sélectionne les attractions touristiques.
 *   - poi.business sélectionne les établissements.
 *   - poi.government sélectionne les bâtiments administratifs.
 *   - poi.medical sélectionne les services d'urgence, notamment les hôpitaux, les pharmacies, la police, les médecins, etc.
 *   - poi.park sélectionne les parcs.
 *   - poi.place_of_worship sélectionne les lieux de culte, notamment les églises, les temples, les mosquées, etc.
 *   - poi.school sélectionne les écoles.
 *   - poi.sports_complex sélectionne les complexes sportifs.
 * - road sélectionne toutes les routes.
 *   - road.arterial sélectionne les artères principales.
 *   - road.highway sélectionne les autoroutes.
 *   - road.highway.controlled_access sélectionne les autoroutes à accès contrôlé.
 *   - road.local sélectionne les routes locales.
 * - transit sélectionne tous les arrêts et toutes les lignes de transports en commun.
 *   - transit.line sélectionne toutes les lignes de transports en commun.
 *   - transit.station sélectionne tous les arrêts de transports en commun.
 *   - transit.station.airport sélectionne les aéroports.
 *   - transit.station.bus sélectionne les arrêts de bus.
 *   - transit.station.rail sélectionne les gares ferroviaires.
 * - water sélectionne les plans d'eau.
 *
 * Style element types
 * - all (par défaut) sélectionne tous les éléments du composant spécifié.
 * - geometry sélectionne tous les éléments géométriques du composant spécifié.
 *   - geometry.fill sélectionne uniquement le remplissage de la géométrie du composant.
 *   - geometry.stroke sélectionne uniquement le trait de la géométrie du composant.
 * - labels sélectionne les libellés textuels associés au composant spécifié.
 *   - labels.icon sélectionne uniquement l'icône affichée dans le libellé du composant.
 *   - labels.text sélectionne uniquement le texte du libellé.
 *   - labels.text.fill sélectionne uniquement le remplissage du libellé. Le remplissage du libellé est généralement rendu comme contour en couleur autour du texte du libellé.
 *   - labels.text.stroke sélectionne uniquement le trait du texte du libellé.
 *
 * Style options
 * - hue (chaîne hexadécimale RVB au format #RRGGBB) indique la couleur de base.
 * - lightness (valeur de point flottant comprise entre -100 et 100) indique le pourcentage de modification de la luminosité de l'élément. Les valeurs négatives réduisent la luminosité (-100 spécifie le noir) et les valeurs positives l'augmentent (+100 spécifie le blanc).
 * - saturation (valeur de point flottant comprise entre -100 et 100) indique le pourcentage de modification de l'intensité de la couleur de base à appliquer à l'élément.
 * - gamma (valeur de point flottant comprise entre 0.01 et 10.0, où 1.0 n'applique aucune correction) indique le niveau de correction gamma à appliquer à l'élément. Les corrections gamma modifient la luminosité des couleurs d'une manière non linéaire, sans avoir d'effet sur les valeurs de blanc et de noir. La correction gamma est généralement utilisée pour modifier le contraste de plusieurs éléments. Par exemple, vous pouvez modifier le gamma pour augmenter ou réduire le contraste entre les bords et l'intérieur des éléments.
 * - invert_lightness (si true) inverse la luminosité existante. Cela s'avère pratique pour, par exemple, rapidement passer à une carte plus sombre avec du texte en blanc.
 * - visibility (on, off ou simplified) indique si et comment l'élément apparaît sur la carte. Une visibilité simplified élimine certains éléments de style des composants concernés ; les routes, par exemple, sont simplifiées en lignes plus fines sans contour, tandis que les parcs perdent le texte de leur libellé, mais conservent leur icône de libellé.
 * - color (chaîne hexadécimale RVB au format #RRGGBB) définit la couleur du composant.
 * - weight (chiffre entier supérieur ou égal à zéro) définit l'épaisseur du composant, en pixels. Définir l'épaisseur sur une valeur élevée peut entraîner un phénomène de rognure près du bord des tuiles.
 */
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
