class BaseData {

	register(obj) {
		this.obj = obj
		this.declareFunction('onChange')
	}

	unregister() {
	}

	forceUpdate() {
		this.obj.forceUpdate()
	}

	setState(arg) {
        this.obj.setState(arg || this)
    }

    getState(arg) {
        return arg ? this.obj.state[arg] : this.obj.state
    }
	
	onChange(id, event, value) {
        let data = {}
        data[id] = value
        this.setState(data)
	}

	declareFunction(fun) {
		this.obj[fun] = this[fun].bind(this)
	}

}
export default BaseData
