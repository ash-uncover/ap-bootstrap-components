import FormatterBase from 'lib/utils/formatters/FormatterBase'
import MomentHelper from 'lib/utils/date/MomentHelper'

export default class TimeFormatter extends FormatterBase {

	constructor(props) {
		super(props)
	}

	getFormattedValue(value) {
		return MomentHelper.localTimeToHumanTime(value)
	}
}