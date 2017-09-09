let _MONDAY    = { key: 'MONDAY', index: 0 }
let _TUESDAY   = { key: 'TUESDAY', index: 1 }
let _WEDNESDAY = { key: 'WEDNESDAY', index: 2 }
let _THURSDAY  = { key: 'THURSDAY', index: 3 }
let _FRIDAY    = { key: 'FRIDAY', index: 4 }
let _SATURDAY  = { key: 'SATURDAY', index: 5 }
let _SUNDAY    = { key: 'SUNDAY', index: 6 }

export default class Day {

	static get MONDAY() { return _MONDAY }
	static get TUESDAY() { return _TUESDAY }
	static get WEDNESDAY() { return _WEDNESDAY }
	static get THURSDAY() { return _THURSDAY }
	static get FRIDAY() { return _FRIDAY }
	static get SATURDAY() { return _SATURDAY }
	static get SUNDAY() { return _SUNDAY }

	static get VALUES() { 
		return [ _MONDAY, _TUESDAY, _WEDNESDAY, _THURSDAY, _FRIDAY, _SATURDAY, _SUNDAY ]
	}

	static get(id) {
		return id && Day[id.toUpperCase()]
	}
}