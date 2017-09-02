import FormatterBase from 'lib/utils/formatters/FormatterBase'
import MomentHelper from 'lib/utils/date/MomentHelper'

export default class DateFormatter extends FormatterBase {

	constructor(props) {
		super(props)
	}

	getFormattedValue(value) {
		return MomentHelper.localDateToHumanDate(value)
	}
}