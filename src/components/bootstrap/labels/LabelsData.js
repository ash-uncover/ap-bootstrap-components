import AppHelper from 'helpers/AppHelper'

class BootstrapData {

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
var BootstrapObj = new BootstrapData()
export default BootstrapObj
