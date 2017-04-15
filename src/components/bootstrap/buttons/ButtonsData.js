import AppHelper from 'helpers/AppHelper'

class Data {

	register(callback) {
		this.callback = callback
		this.onStoreUpdate()
	}

	onStoreUpdate() {
		this.buildData()
		this.callback()
	}

	unregister() {
	}

	buildData() {
	}

}
var Obj = new Data()
export default Obj
