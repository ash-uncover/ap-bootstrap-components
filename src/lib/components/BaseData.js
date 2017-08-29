class BaseData {

	register(obj) {
		this.obj = obj
		this.obj.onChange = this.onChange.bind(this)
	}

	unregister() {
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

}
export default BaseData
