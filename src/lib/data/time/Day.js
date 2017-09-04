let _MONDAY    = { key: 'MONDAY' }
let _TUESDAY   = { key: 'TUESDAY' }
let _WEDNESDAY = { key: 'WEDNESDAY' }
let _THURSDAY  = { key: 'THURSDAY' }
let _FRIDAY    = { key: 'FRIDAY' }
let _SATURDAY  = { key: 'SATURDAY' }
let _SUNDAY    = { key: 'SUNDAY' }

export default class Day {

	static get MONDAY() { return _MONDAY }
	static get TUESDAY() { return _TUESDAY }
	static get WEDNESDAY() { return _WEDNESDAY }
	static get THURSDAY() { return _THURSDAY }
	static get FRIDAY() { return _FRIDAY }
	static get SATURDAY() { return _SATURDAY }
	static get SUNDAY() { return _SUNDAY }

	static get VALUES() { 
		return [ MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY ]
	}

	static get(id) {
		return id && Day[id.toUpperCase()]
	}
}