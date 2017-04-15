import AppHelper from 'helpers/AppHelper'

class ButtonsData {

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
var ButtonsObj = new AppData()
export default ButtonsObj
