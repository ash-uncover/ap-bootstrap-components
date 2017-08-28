import ValidatorBase from 'lib/utils/form/ValidatorBase'

export default class StringValidator extends ValidatorBase {

	constructor(props) {
		super(props)
		this.lengthMin = Number(props.lengthMin)
		this.lengthMax = Number(props.lengthMax)
	}

	getState(value) {
		if (value || value === '') {
			let l = value.length;
			let isMinOk = !isNaN(this.lengthMin) ? l >= this.lengthMin : true
			let isMaxOk = !isNaN(this.lengthMax) ? l <= this.lengthMax : true
			if (isMinOk && isMaxOk) {
				return ValidatorBase.STATES.SUCCESS
			} 
		}
		return ValidatorBase.STATES.ERROR
	}

	getBlockedValue(value) {
		if (this.lengthMax && value.length > this.lengthMax) {
			return value.substr(0, this.lengthMax)
		}
		return value
	}
}