import ValidatorBase from 'lib/utils/form/ValidatorBase'

export default class NonNullValidator extends ValidatorBase {

	constructor(props) {
		super(props)
	}

	getState(value) {
		if (value !== null && typeof value !== 'undefined') {
			return ValidatorBase.STATES.SUCCESS
		} else {
			return ValidatorBase.STATES.ERROR
		}
	}
}