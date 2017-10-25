
let DEBUG = false

function log(msg) {
	if (DEBUG) {
		console.log(msg)
	}
}

let _CONFIG = {
	PROTOCOL: (window.location.protocol === 'file:' ? 'http:' : window.location.protocol) + '//',
	HOSTNAME: window.location.hostname,
	PORT: '8090',
	BASE_URL: '/rest',
	SERVICE_URL: null,
	HEADER_TOKEN : 'Authorization'
}

function updateServiceUrl() {
	_CONFIG.SERVICE_URL = _CONFIG.PROTOCOL + _CONFIG.HOSTNAME + ':' + _CONFIG.PORT + _CONFIG.BASE_URL
}

class RestService {

	constructor() {
		updateServiceUrl()
	}

	set protocol(protocol) {
		_CONFIG.PROTOCOL = protocol
		updateServiceUrl()
	}
	set hostname(hostname) {
		_CONFIG.HOSTNAME = hostname
		updateServiceUrl()
	}
	set port(port) {
		_CONFIG.PORT = port
		updateServiceUrl()
	}
	set baseUrl(baseUrl) {
		_CONFIG.BASE_URL = baseUrl
		updateServiceUrl()
	}

	get serviceUrl() {
		return _CONFIG.SERVICE_URL
	}

	buildUrlParam(data) {
		let params = Object.keys(data || {}).map(function(key) {
		    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
		}).join('&')
		return params ? '?' + params : ''
	}

	request(reqParam) {
		reqParam.url = this.serviceUrl + reqParam.url
		if (reqParam.query) {
			reqParam.url += this.buildUrlParam(reqParam.query)
		}
		reqParam.method = reqParam.method || 'GET'
		reqParam.data = reqParam.data  || {}
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest()
			xhr.open(reqParam.method, reqParam.url, true)
            if (reqParam.token) {
                xhr.setRequestHeader(_CONFIG.HEADER_TOKEN, reqParam.token)
            }
			if (!reqParam.type) {
				xhr.setRequestHeader('Content-type', 'application/json')
			} else {
				xhr.responseType = reqParam.type
			}
			xhr.onerror = function(oEvt) {
				reject({ 
					error: {
						code: 'CONNECTION_ERROR',
						message: 'Problème de connexion au serveur'
						},
					status: 0 
				})
			}
			xhr.onload = function(oEvt) {
				if (xhr.readyState === 4) {
					if (xhr.status === 200 || xhr.status === 201) {
						if (xhr.response) {
							if (reqParam.type) {
								resolve({
									type: xhr.getResponseHeader('Content-Type'),
									content: xhr.response
								})
							} else {
								resolve(JSON.parse(xhr.responseText))
							}
						} else {
							resolve()
						}
					} else if (xhr.status === 401) {
						reject({ error: 'UNAUTHORIZED', status: 401 })
                    } else if (xhr.status === 404) {
                        reject({ error: 'NOT_FOUND', status: 404 })
					} else if (xhr.status === 500) {
						reject({ error: 'INTERNAL_ERROR', status: 500 })
					} else {
						reject(JSON.parse(xhr.responseText))
					}
				} else {
				}
			}
			let data = JSON.stringify(reqParam.data)
			log(data)
			xhr.send(data)
		})
	};

	sendData(reqParam) {
		reqParam.url = this.serviceUrl + reqParam.url
		reqParam.method = 'POST'
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest()
			xhr.open(reqParam.method, reqParam.url, true)
			xhr.setRequestHeader(_CONFIG.HEADER_TOKEN, reqParam.token)
			//xhr.setRequestHeader('Content-type', 'multipart/form-data');
			xhr.onload = function(oEvt) {
				if (xhr.readyState === 4) {
					if (xhr.status === 200 || xhr.status === 201) {
						if (xhr.response) {
							console.log(xhr.responseText)
							let resp = JSON.parse(xhr.responseText)
							reqParam.data.id = resp.id
							resolve(JSON.parse(xhr.responseText))
						} else {
							resolve()
						}
					} else if (xhr.status === 401) {
						reject({ error: 'UNAUTHORIZED', status: 401 })
					} else if (xhr.status === 404) {
						reject({ error: 'NOT_FOUND', status: 404 })
					} else if (xhr.status === 500) {
						reject({ error: 'INTERNAL_ERROR', status: 500 })
					} else {
						reject(JSON.parse(xhr.responseText))
					}
				} else {
				}
			};
			let formData = new FormData()
			formData.append('file', reqParam.data.file)
			xhr.send(formData)
		})
	}
}
let RestServiceObj = new RestService()
export default RestServiceObj