class Utils {

	/**
	 * 
	 * @param {string} [user]
	 * @param {string} [pass]
	 * @returns
	 */
    static encode(user, pass) {
    	return 'Basic ' + btoa(user + ':' + pass);
    }

    /**
     * 
	 * @param {object} [args]
	 * @param {array} [params]
	 * @returns
	 */
    static checkMembers(args, params) {
    	if (args && params) {
			for (var i = 0; i < params.length; i++) {
				if (typeof args[params[i]] === 'undefined' || args[params[i]] === null) {
					throw 'Missing mandatory argument: ' + params[i];
				}
			}
		}
	}

	static map(object, callback) {
		let result = [];
		for (let member in object) {
			if (callback) {
				result.push(callback(object[member], member));
			} else {
				result.push(object[member]);
			}
		}
		return result;
	}
	static filter(object, callback) {
		let result = [];
		for (let member in object) {
			let obj = object[member];
			if (callback(obj)) {
				result.push(obj);
			}
		}
		return result;
	}
	static forEach(object, callback) {
		for (let member in object) {
			if (object.hasOwnProperty(member)) {
				callback(object[member])
			}
		}
	}

	/**
	 * Clones an object if it is a javascript object.
	 * @param {object} obj : the object ot clone
	 * @returns {object} obj : the cloned copy
	 */
	static clone(obj) {
		if (null === obj || 'object' != typeof obj || obj instanceof Image) {
			return obj;
		}
		let copy = obj.constructor();
		for (let attr in obj) {
			if (obj.hasOwnProperty(attr)) {
				copy[attr] = obj[attr];
			}
		}
		return copy;
	}

	/**
     * 
	 * @param {object} [obj1]
	 * @param {object} [obj2]
	 * @param {boolean} [overwrite]
	 * @returns
	 */
    static merge(obj1, obj2, overwrite) {
    	if (!obj1) return obj2;
    	if (!obj2) return obj1;
    	var result = {};
    	for (var att1 in obj1) {
    		result[att1] = obj1[att1];
    	}
    	for (var att2 in obj2) {
    		if (overwrite || !result[att2]) {
    			result[att2] = obj2[att2];
    		}
    	}
    	return result;
	}

	static overwrite(obj1, obj2) {
    	if (!obj1) return obj2;
    	if (!obj2) return obj1;
    	for (var att2 in obj2) {
    		obj1[att2] = obj2[att2];
    	}
    	return obj1;
	}

	static getField(obj, path) {
		if (!obj) return null;
		let fields = path.split('.');
		let result = obj;
		for (let i = 0; i < fields.length; i++) {
			result = result[fields[i]];
		}
		return result;
	}

	static setField(obj, path, value) {
		let fields = path.split('.');
		let result = obj;
		for (let i = 0; i < fields.length; i++) {
			if (i < fields.length - 1) {
				result = result[fields[i]];
			} else {
				result[fields[i]] = value;
			}
		}
	}
}
export default Utils