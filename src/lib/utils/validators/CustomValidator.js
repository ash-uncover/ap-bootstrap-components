import ValidatorBase from 'lib/utils/form/ValidatorBase'

export default class CustomValidator extends ValidatorBase {

	constructor(props) {
		super(props)
		this.lengthMin = props.lengthMin
		this.lengthMax = props.lengthMax
	}

	getState(value) {
		let v = String(value)
		let l = v.length
		let isMinOk = this.lengthMin ? l >= this.lengthMin : true
		let isMaxOk = this.lengthMax ? l <= this.lengthMax : true
		if (!isMinOk || !isMaxOk) {
			return ValidatorBase.STATES.ERROR
		}
		if (this.regSuccess.test(v)) {
			return ValidatorBase.STATES.SUCCESS
		} else if (this.regWarning && this.regWarning.test(v)) {
			return ValidatorBase.STATES.WARNING
		} 
		return ValidatorBase.STATES.ERROR
	}

	getBlockedValue(value) {
		let v = String(value)
		if (this.lengthMax && v.length > this.lengthMax) {
			v = v.substr(0, this.lengthMax)
			if (typeof value === 'number') {
				return Number(v)
			}
			return v
		}
		return value
	}
}