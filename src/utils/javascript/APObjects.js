export default class APObjects {

	clone(o) {
		if (o === null || typeof o !== 'object') {
			return o
		}
		var copy = o.constructor()
		for (var attr in o) {
			if (o.hasOwnProperty(attr)) {
				copy[attr] = o[attr]
			}
		}
		return copy
	}
}