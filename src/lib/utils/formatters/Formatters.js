import FormatterBase from 'lib/utils/formatters/FormatterBase'

import DateFormatter from 'lib/utils/formatters/DateFormatter'
import PhoneFormatter from 'lib/utils/formatters/PhoneFormatter'

let date = new DateFormatter()
let phone = new PhoneFormatter()

class Formatters {

	static get Date() {
		return date
	}

	static get Phone() {
		return phone
	}
}
export default Formatters
