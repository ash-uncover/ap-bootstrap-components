import ValidatorBase from 'lib/utils/validators/ValidatorBase'

import ArrayValidator from 'lib/utils/validators/ArrayValidator'
import BooleanValidator from 'lib/utils/validators/BooleanValidator'
import CustomValidator from 'lib/utils/validators/CustomValidator'
import DateValidator from 'lib/utils/validators/DateValidator'
import EmailValidator from 'lib/utils/validators/EmailValidator'
import NonNullValidator from 'lib/utils/validators/NonNullValidator'
import NumberValidator from 'lib/utils/validators/NumberValidator'
import StringValidator from 'lib/utils/validators/StringValidator'

import MomentHelper from 'lib/utils/date/MomentHelper'

let email = new EmailValidator()
let nonEmptyString = new StringValidator({ lengthMin: 1})
let nonEmptyArray = new ArrayValidator({ lengthMin: 1})
let nonNull = new NonNullValidator()
let boolean = new BooleanValidator()
let phone = new CustomValidator({ lengthMax: 10, regSuccess: new RegExp("^0[1-9]([0-9]){8}$") })
let socialNumber = new CustomValidator({ lengthMax: 13, regSuccess: new RegExp("^[1-2][0-9]{12}$") })
let socialNumberShort = new CustomValidator({ lengthMax: 7, regSuccess: new RegExp("^[1-2][0-9]{6}$") })
let postalCode = new CustomValidator({ lengthMax: 5, regSuccess: new RegExp("^[0-9]{5}$") })
let idNumber = new CustomValidator({ lengthMax: 12, regSuccess: new RegExp("^[0-9]{12}$") })
let siretNumber = new CustomValidator({ lengthMax: 14, regSuccess: new RegExp("^[0-9]{14}$") })
let tweet = new StringValidator({ lengthMin: 1, lengthMax: 140 })

let point = new NumberValidator({ minValue: 1 })

let beforeToday = new DateValidator({ dateMin: MomentHelper.toLocalDate(moment()) })
let afterToday = new DateValidator({ dateMax: MomentHelper.toLocalDate(moment()) })

class Validators {

	static get Email() {
		return email
	}

	static get NonNull() {
		return nonNull
	}

	static get Boolean() {
		return boolean
	}

	static get Phone() {
		return phone
	}

	static get NonEmptyString() {
		return nonEmptyString
	}

	static get NonEmptyArray() {
		return nonEmptyArray
	}

	static get SocialNumber() {
		return socialNumber
	}

	static get SocialNumberShort() {
		return socialNumberShort
	}

	static get IDCardNumber() {
		return idNumber
	}

	static get PositiveInteger() {
		return point
	}

	static get PostalCode() {
		return postalCode
	}

	static get SiretNumber() {
		return siretNumber
	}

	static get Tweet() {
		return tweet
	}

	static get AfterToday() {
		return afterToday
	}

	static get BeforeToday() {
		return beforeToday
	}
}
Validators.STATES = ValidatorBase.STATES
export default Validators