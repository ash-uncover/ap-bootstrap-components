import ValidatorBase from 'lib/utils/validators/ValidatorBase'
import MomentHelper from 'lib/utils/date/MomentHelper'

import moment from 'moment'

export default class DateValidator extends ValidatorBase {

	constructor(props) {
		super(props)
		this.dateMin = props.dateMin ? MomentHelper.fromLocalDate(props.dateMin) : null
		this.dateMax = props.dateMax ? MomentHelper.fromLocalDate(props.dateMax) : null
	}

	getState(value) {
		if (value && value.length === 3) {
			let m = MomentHelper.fromLocalDate(value)
			if (this.dateMin) {
				if (this.dateMin.isAfter(m)) {
					return ValidatorBase.STATES.ERROR
				}
			}
			if (this.dateMax) {
				if (this.dateMax.isBefore(m)) {
					return ValidatorBase.STATES.ERROR
				}
			}
			return ValidatorBase.STATES.SUCCESS
		}
		return ValidatorBase.STATES.ERROR
	}
}