import ArrayValidator from 'utils/form/ArrayValidator'
import BooleanValidator from 'utils/form/BooleanValidator'
import CustomValidator from 'utils/form/CustomValidator'
import EmailValidator from 'utils/form/EmailValidator'
import NonNullValidator from 'utils/form/NonNullValidator'
import NumberValidator from 'utils/form/NumberValidator'
import StringValidator from 'utils/form/StringValidator'

let email = new EmailValidator();
let nestr = new StringValidator({ lengthMin: 1});
let nearr = new ArrayValidator({ lengthMin: 1});
let nnull = new NonNullValidator();
let boole = new BooleanValidator();
let phone = new CustomValidator({ lengthMax: 10, regSuccess: new RegExp("^0[1-9]([0-9]){8}$") });
let sslng = new CustomValidator({ lengthMax: 13, regSuccess: new RegExp("^[1-2][0-9]{12}$") });
let sssht = new CustomValidator({ lengthMax: 7, regSuccess: new RegExp("^[1-2][0-9]{6}$") });
let posta = new CustomValidator({ lengthMax: 5, regSuccess: new RegExp("^[0-9]{5}$") });
let idnum = new CustomValidator({ lengthMax: 12, regSuccess: new RegExp("^[0-9]{12}$") });
let siret = new CustomValidator({ lengthMax: 14, regSuccess: new RegExp("^[0-9]{14}$") });
let tweet = new StringValidator({ lengthMin: 1, lengthMax: 140 });

let point = new NumberValidator({ minValue: 1 });

export default class Validators {

	static get Email() {
		return email;
	}

	static get NonNull() {
		return nnull;
	}

	static get Boolean() {
		return boole;
	}

	static get Phone() {
		return phone;
	}

	static get NonEmptyString() {
		return nestr;
	}

	static get NonEmptyArray() {
		return nearr;
	}

	static get SocialNumber() {
		return sslng;
	}

	static get SocialNumberShort() {
		return sssht;
	}

	static get IDCardNumber() {
		return idnum;
	}

	static get PositiveInteger() {
		return point;
	}

	static get PostalCode() {
		return posta;
	}

	static get SiretNumber() {
		return siret;
	}

	static get Tweet() {
		return tweet;
	}

}