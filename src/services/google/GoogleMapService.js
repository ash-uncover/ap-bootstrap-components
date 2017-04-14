
let DEBUG = false;

function log(msg) {
	if (DEBUG) {
		console.log(msg);
	}
}

let _CONFIG = {
	GEOCODE : 'https://maps.googleapis.com/maps/api/geocode/json?',
	KEY : ''
};

var geocoder = new google.maps.Geocoder

export default class GoogleMapService {

	/**
	 * @param {object} position
	 * @param {float} position.lattitude
	 * @param {float} position.longitude
	 */
	static getReverseGeocode2(position) {
		let reqParam = {}
		reqParam.url = _CONFIG.GEOCODE + 'latlng=' + position.lattitude + ',' + position.longitude + '=' + _CONFIG.KEY
		reqParam.method = 'GET'
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest()
			xhr.open(reqParam.method, reqParam.url, true)
			xhr.onload = function(oEvt) {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.responseText))
					} else {
						reject(JSON.parse(xhr.responseText))
					}
				}
			}
			xhr.send()
		})
	}

	static getReverseGeocode(args) {
		return new Promise(function (resolve, reject) {
			var latlng = {
				lat: parseFloat(args.lattitude), 
				lng: parseFloat(args.longitude)
			}
			geocoder.geocode({'location': latlng}, function(results, status) {
				if (status === google.maps.GeocoderStatus.OK) {
					resolve(results)
				} else {
					reject({ error: 'Geocoder failed due to: ' + status });
				}
			})
		})
	}
}