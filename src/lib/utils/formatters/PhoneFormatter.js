import FormatterBase from 'lib/utils/formatters/FormatterBase'

export default class PhoneFormatter extends FormatterBase {

	constructor(props) {
		super(props)
	}

	getFormattedValue(value) {
		let result = ''
		for (let i = 0 ; i < value.length ; i += 2) {
			if (i) {
				result += ' '
			}
			result += value.substr(i, 2)
		}
		return result
	}
}