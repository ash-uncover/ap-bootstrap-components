import ValidatorBase from 'lib/utils/validators/ValidatorBase'

export default class PhoneValidator extends ValidatorBase {

	constructor(props) {
		super(props)
		this.regSuccess = /^0[1-9]([-. ]?[0-9]{2}){4}$/
		this.msgError = props.msgError || 'Veuillez saisir un numéro de téléphone valide'
	}

	getState(value) {
		if (value || value === '') {
			if (this.regSuccess.test(value)) {
				return ValidatorBase.STATES.SUCCESS
			} 
		}
		return ValidatorBase.STATES.ERROR
	}
}