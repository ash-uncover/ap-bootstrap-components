
let DEBUG = false

function log(msg) {
	if (DEBUG) {
		console.log(msg)
	}
}

let proto = window.location.protocol
let protocol = (proto === 'file:' ? 'http:' : proto) + '//'
let serverName = window.location.hostname
let baseUrl = protocol + serverName

let _CONFIG = {
	BASE_URL : baseUrl + ':8090/rest',
	HEADER_TOKEN : 'Authorization'
}

export default class RestService {

	static _request(reqParam) {
		reqParam.url = _CONFIG.BASE_URL + reqParam.url
		reqParam.method = reqParam.method || 'GET'
		reqParam.data = reqParam.data  || {}
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest()
			xhr.open(reqParam.method, reqParam.url, true)
			xhr.setRequestHeader(_CONFIG.HEADER_TOKEN, reqParam.token)
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

	static _sendData(reqParam) {
		reqParam.url = _CONFIG.BASE_URL + reqParam.url
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
