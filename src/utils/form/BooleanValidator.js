import ValidatorBase from 'utils/form/ValidatorBase'

export default class BooleanValidator extends ValidatorBase {

	constructor(props) {
		super(props)
		this.msgSuccess = ''
		this.msgError = ''
	}

	getState(value) {
		if (value === true) {
			return 'success'
		} else {
			return 'error'
		}
	}
}