import FormatterBase from 'lib/utils/formatters/FormatterBase'

import DateFormatter from 'lib/utils/formatters/DateFormatter'
import PhoneFormatter from 'lib/utils/formatters/PhoneFormatter'
import TimeFormatter from 'lib/utils/formatters/TimeFormatter'

let date = new DateFormatter()
let phone = new PhoneFormatter()
let time = new TimeFormatter()

class Formatters {

	static get Date() {
		return date
	}

	static get Phone() {
		return phone
	}

	static get Time() {
		return time
	}
}
export default Formatters
