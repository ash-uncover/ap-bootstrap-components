import ValidatorBase from 'lib/utils/validators/ValidatorBase'

export default class ArrayValidator extends ValidatorBase {

	constructor(props) {
		super(props)
		this.lengthMin = Number(props.lengthMin)
		this.lengthMax = Number(props.lengthMax)
	}

	getState(value) {
		if (value && (value.length || value.length === 0)) {
			let l = value.length
			let isMinOk = !isNaN(this.lengthMin) ? l >= this.lengthMin : true
			let isMaxOk = !isNaN(this.lengthMax) ? l <= this.lengthMax : true
			if (isMinOk && isMaxOk) {
				return ValidatorBase.STATES.SUCCESS
			} 
		}
		return ValidatorBase.STATES.ERROR
	}
}