// https://www.iana.org/assignments/media-types/media-types.xhtml#image
let IMAGE = { 
	BMP: { ext: 'bmp', mime: 'image/bmp' },
	JPEG: { ext: 'jpeg', mime: 'image/jpeg' },
	JPG: { ext: 'jpg', mime: 'image/jpg' },
	PNG: { ext: 'png', mime: 'image/png' }
}

export default class MimeTypes {

	static get IMAGE() { return IMAGE }

	static get IMAGES() { return [
		IMAGE.BMP,
		IMAGE.JPEG,
		IMAGE.JPG,
		IMAGE.PNG
	]}

	static buildAccept(types) {
		if (types && types.length) {
			let result = []
			types.forEach(function (type) {
				result.push(type.ext)
				result.push(type.mime)
			})
			return result.join(',')
		}
	}
	
	static buildExtension(types) {
		if (types && types.length) {
			return types.map(function (type) {
				return type.ext
			})
		}
	}
}