import ValidatorBase from 'utils/form/ValidatorBase'

export default class EmailValidator extends ValidatorBase {

	constructor(props) {
		super(props)
		this.regSuccess = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		this.msgSuccess = '';
		this.msgError = 'Veuillez saisir une adresse électronique valide';
	}

	getState(value) {
		if (typeof value !== 'undefined' && value !== null) {
			if (this.regSuccess.test(value)) {
				return ValidatorBase.STATES.SUCCESS;
			} 
		}
		return ValidatorBase.STATES.ERROR;
	}
}