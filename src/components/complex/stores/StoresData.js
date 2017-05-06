import AppHelper from 'helpers/AppHelper'

class Data {

	register(callback) {
		this.callback = callback
		
		this.loginUsername = ''
		this.loginPassword = ''
		this.loginSubmitUsername = ''
		this.loginSubmitPassword = ''
		this.loginErrorData = ''

		this.registerUsername = ''
		this.registerPassword = ''
		this.registerConfirm = ''
		this.registerSubmitUsername = ''
		this.registerSubmitPassword = ''
		this.registerErrorData = ''

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

		this.registerData = {
			onCancel: this.onRegisterCancel.bind(this),
			onSubmit: this.onRegisterSubmit.bind(this),
			onChange: this.onRegisterChange.bind(this),
			username: this.registerUsername,
			password: this.registerPassword,
			confirm: this.registerConfirm
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

	onRegisterCancel(value) {
		this.registerUsername = ''
		this.registerPassword = ''
		this.registerConfirm = ''
		this.registerErrorData = ''
		this.onStoreUpdate()
	}
	onRegisterSubmit(value) {
		if (value.username === 'a' && value.password === 'a') {
			this.registerErrorData = 'Success'
		} else {
			this.registerErrorData = 'Error'
		}
		this.registerSubmitUsername = value.username
		this.registerSubmitPassword = value.password
		this.onStoreUpdate()
	}
	onRegisterChange(value) {
		this.registerUsername = value.username
		this.registerPassword = value.password
		this.registerConfirm = value.confirm
		this.registerErrorData = ''
		this.onStoreUpdate()
	}


}
var Obj = new Data()
export default Obj
