import React from 'react'

class Base extends React.Component {

	constructor(props) {
		super(props)
		this.baseClasses = []
		this.errorMessage = []
		this.propsInfos = {}
	}

	_getOptionnalProps(prop) {
		let opt = this.propsInfo.optionnal || {}
		if (typeof prop !== 'undefined') {
			return opt[prop]
		}
		return opt
	}
	_getRequiredProps(prop) {
		let req = this.propsInfo.required || {}
		if (typeof prop !== 'undefined') {
			return req[prop]
		}
		return req
	}
	
	addClass(obj, className) {
		if (obj.className) {
			obj.className += ' ' + className
		} else {
			obj.className = className
		}
	}
	
	addClassIf(cond, obj, className) {
		if (cond) {
			this.addClass(obj, className)
		}
	}
	
	copyFromObj(obj1, key, obj2) {
		if (obj1[key]) {
			obj2[key] = obj1[key];
		}
	}
	
	copyRenameFromObj(obj1, key1, obj2, key2) {
		let v1 = obj1[key1]
		if (typeof v1 !== 'undefined') {
			obj2[key2] = obj1[key1]
		}
	}
	
	buildOneProps(attr, propsInfos) {
		if (propsInfos.store) {
			let propsName = attr;
			if (propsInfos.rename)
				propsName = propsInfos.rename
			if (propsInfos.value) {
				propsInfos.store[propsName] = propsInfos.value
			} else {
				this.copyRenameFromObj(this.props, attr, propsInfos.store, propsName)
			}
		}
	}
	
	checkOnePropsForBuild(attr, compoName) {
		if (this.props.hasOwnProperty(attr)) {
			let required = this.propsInfos.required[attr]
			let optionnal = this.propsInfos.optionnal[attr]
			if (required) {
				this.buildOneProps(attr, required)
			} else if (optionnal) {
				this.buildOneProps(attr, optionnal)
			} else {
				let errorMessage = 'ERROR : Compo ' + compoName + ' Unknow properties: ' + attr
				console.log(errorMessage)
				this.errorMessage.push(errorMessage)
			}
		}
	}
	
	buildProps(compoName) {
		for (attr in this.propsInfos.optionnal) {
			if (this.propsInfos.optionnal.hasOwnProperty(attr)) {
				let optionnal = this.propsInfos.optionnal[attr]
				if (optionnal.store && optionnal.defaultValue) {
					let propsName = attr;
					if (optionnal.rename)
						propsName = optionnal.rename
					optionnal.store[propsName] = optionnal.defaultValue
				}
			}
		}
		
		for (var attr in this.props) {
			if (attr !== 'className')
				this.checkOnePropsForBuild(attr, compoName)
		}
		
		for (var attr in this.propsInfos.required) {
			if (this.propsInfos.required.hasOwnProperty(attr)) {
				if (!this.props[attr]) {
					let errorMessage = 'ERROR : Compo require ' + compoName + '  properties: ' + attr
					console.log(errorMessage)
					this.errorMessage.push(errorMessage)
				}
			}
		}

		this.className = ''
		let classes = this._buildClasses()
		if (this.props.className) {
			classes.push(this.props.className)
		}
		for (let i = 0; i < classes.length; i++) {
			if (i) {
				this.className += ' ' + classes[i]		
			} else {
				this.className += classes[i]
			}
		}
	}

	_buildClasses() {
		return this.baseClasses.slice()
	}
	
	render() {
		return(
			<p>Base Component</p>
		);
	}
}
export default Base;