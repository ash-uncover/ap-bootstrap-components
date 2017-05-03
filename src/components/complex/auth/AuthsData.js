import AppHelper from 'helpers/AppHelper'

class Data {

	register(callback) {
		this.callback = callback
		
		this.loginUsername = ''
		this.loginPassword = ''
		this.loginSubmitUsername = ''
		this.loginSubmitPassword = ''
		this.loginErrorData = ''

		this.onStoreUpdate()
	}

	onStoreUpdate() {
		this.buildData()
		this.callback()
	}

	unregister() {
	}

	buildData() {
		this.loginData = {
			onCancel: this.onLoginCancel.bind(this),
			onSubmit: this.onLoginSubmit.bind(this),
			onChange: this.onLoginChange.bind(this),
			username: this.loginUsername,
			password: this.loginPassword
		}
	}

	onLoginCancel(value) {
		this.loginUsername = ''
		this.loginPassword = ''
		this.loginErrorData = ''
		this.onStoreUpdate()
	}
	onLoginSubmit(value) {
		if (value.username === 'a' && value.password === 'a') {
			this.loginErrorData = 'Success'
		} else {
			this.loginErrorData = 'Error'
		}
		this.loginSubmitUsername = value.username
		this.loginSubmitPassword = value.password
		this.onStoreUpdate()
	}
	onLoginChange(value) {
		this.loginUsername = value.username
		this.loginPassword = value.password
		this.loginErrorData = ''
		this.onStoreUpdate()
	}

}
var Obj = new Data()
export default Obj
