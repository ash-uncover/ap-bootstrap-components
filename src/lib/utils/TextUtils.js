String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
}

export default class TextUtils {

	static pluralize(s, n) {
		if (n && n > 1) {
			return s + 's'
		}
		return s
	}

	static capitalize(s) {
		if (s.length) {
			return s.substring(0, 1).toUpperCase() + s.substring(1)
		}
		return ''
	}

	static easenSearch(value) {
		return value.toLowerCase()
			.replaceAll('à', 'a')
			.replaceAll('é', 'e')
			.replaceAll('è', 'e')
			.replaceAll('ê', 'e')
			.replaceAll('î', 'i')
			.replaceAll('ï', 'i')
			.replaceAll('ô', 'o')
			.replaceAll('ö', 'o')
			.replaceAll('û', 'u')
			.replaceAll('ù', 'u')
	}
}