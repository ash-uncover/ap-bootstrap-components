import AppHelper from 'helpers/AppHelper'

class Data {

	register(callback) {
		this.callback = callback
		this.address = {
			address: 'N/A',
			postalCode: 'N/A',
			city: 'N/A',
			country: 'N/A'
		}
		this.address2 = {
			lattitude: 48.8697246,
			longitude: 2.3083392999999433
		}
		this.onStoreUpdate()
	}

	onStoreUpdate() {
		this.buildData()
		this.callback()
	}

	unregister() {
	}

	buildData() {
		this.autocompleteData = {
			placeholder: 'Type address',
			onChange: this.onAddressChanged.bind(this)
		}
		this.autocomplete2Data = {
			placeholder: 'Type address',
			onChange: this.onAddress2Changed.bind(this),
			location: {
				lattitude: this.address2.lattitude,
				longitude: this.address2.longitude
			}
		}
		this.buttonResetData = {
			bsStyle: 'warning',
			block: true,
			onClick: this.onReset2.bind(this)
		}
	}

	onAddressChanged(event) {
		this.address = event
		this.onStoreUpdate()
	}
	onAddress2Changed(event) {
		this.address2 = event
		this.onStoreUpdate()
	}
	onReset2() {
		this.autocomplete2Data.location = null
		this.address2 = {
			lattitude: 48.8697246,
			longitude: 2.3083392999999433
		}
		this.onStoreUpdate()
	}
}
var Obj = new Data()
export default Obj
