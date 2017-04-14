export default class NumberValidator {

	constructor(props) {
		this.minValue = props.minValue
		this.maxValue = props.maxValue
	}

	getState(value) {
		let v = Number(value)
		if (this.minValue) {
			let min = Number(this.minValue)
			if (v < min) {
				return 'error'
			}
		}
		if (this.maxValue) {
			let max = Number(this.maxValue)
			if (v > max) {
				return 'error'
			}
		}
		return 'success'
	}

	getBlockedValue(value) {
		return value
	}
}