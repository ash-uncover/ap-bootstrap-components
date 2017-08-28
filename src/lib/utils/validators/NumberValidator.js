import ValidatorBase from 'lib/utils/validators/ValidatorBase'

export default class NumberValidator extends ValidatorBase {

	constructor(props) {
		super(props)
		this.minValue = props.minValue
		this.maxValue = props.maxValue
	}

	getState(value) {
		let v = Number(value)
		if (this.minValue) {
			let min = Number(this.minValue)
			if (v < min) {
				return ValidatorBase.STATES.ERROR
			}
		}
		if (this.maxValue) {
			let max = Number(this.maxValue)
			if (v > max) {
				return ValidatorBase.STATES.ERROR
			}
		}
		return ValidatorBase.STATES.SUCCESS
	}

	getBlockedValue(value) {
		return value
	}
}