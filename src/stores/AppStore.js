import { Dispatcher, StoreBase } from 'ap-flux';

var AppStore = new StoreBase ({ name: 'APP_STORE', content: {} });

AppStore.setBusy = function(busy) {
	AppStore.busy = busy
	AppStore.notify()
}

AppStore.navigate = function(result, param) {
	AppStore._content.path = result
	AppStore.notifyPath('/path')
}

AppStore.navigate_back = function(result, param) {
	AppStore._content.path = '___BACK___'
	AppStore.notifyPath('/path')
}

AppStore.set_app_display = function(result, param) {
	let path = '/app' + result.path
	AppStore.setData(path, result.value)
	AppStore.notifyPath(path + result.path)
}

Dispatcher.register('NAVIGATE', AppStore.navigate);
Dispatcher.register('NAVIGATE_BACK', AppStore.navigate_back);
Dispatcher.register('SET_APP_DISPLAY', AppStore.set_app_display);
