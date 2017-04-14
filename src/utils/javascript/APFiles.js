export default class APFiles {

	/**
	 * Determine a file extension
	 * @param {object} file	: a file
	 * @returns {string} the file extension
	 */
	static getExtension(file) {
		let name = file.name
		if (!name) {
			throw 'file.name is not defined, please provde a valid file'
		}
		return name.substring(name.lastIndexOf('.') + 1).toLowerCase()
	}

	/**
	 * Check if a file extension is one of the specified
	 * @param {object} file			: a file
	 * @param {array} supportedExt	: a list of supported extension
	 * @returns {boolean} true if the file extension match
	 */
	static checkExtension(file, supportedExt) {
		return (supportedExt || []).indexOf(APFiles.getExtension(file)) !== -1
	}


	/**
	 *  Check if a file size does not exceed a limit
	 * @param {object} file	: a file
	 * @param {number} size	: the maximum size
	 * @returns {boolean} true if the file size is below the limit
	 */
	static checkSize(file, size) {
		if (!file.size) {
			throw 'file.size is not defined, please provde a valid file'
		}
		return file.size <= size
	}

}