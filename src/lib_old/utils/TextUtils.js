export default class TextUtils {

	static pluralize(s, n) {
		if (n && n > 1) {
			return s + 's';
		}
		return s;
	}

	static capitalize(s) {
		if (s.length) {
			return s.substring(0, 1).toUpperCase() + s.substring(1);
		}
		return '';
	}
}