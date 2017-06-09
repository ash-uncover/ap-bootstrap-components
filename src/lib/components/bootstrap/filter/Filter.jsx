import React from 'react'
import Base from 'lib/components/Base'

import { FormSelect, Button, FormInput } from 'lib/exports'

import './ap-filter.scss'


class BSFilter extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = [ 'ap-filter' ]
		// Sub-component props
		this.formProps = {}
		this.state = {
			currentFilters: [],
			currentOperators: ["=", "<", ">"]
		}
		// Component props
		this.propsInfos = {
			required : {
				data: {},
				onChangeState: {}
			},
			optionnal : {
				children: {},
			}
		}
		// default value 
		this.selectOperator = "="
		this.inputValue = "";

		// constant
		this.SELECTDATA = 0
		this.SELECTOPERATOR = 1
		this.INPUTVALUE = 3
	}

	onChangeState(filters) {
		if (this.props.onChangeState) {
			this.props.onChangeState(filters)
		}
	}

	//add new filter in tab
	onClick(){
		var filter = {filter: this.selectData, operator: this.selectOperator, value: this.inputValue}
		this.state.currentFilters.push(filter)
		this.setState({currentFilters: this.state.currentFilters})
		this.onChangeState(this.state.currentFilters);
	}

	//delete filter in tab
	onFilterClick(filter){
		var index = this.state.currentFilters.indexOf(filter);
		if (index > -1) {
		    this.state.currentFilters.splice(index, 1);
		}
		this.setState({currentFilters: this.state.currentFilters})
		this.onChangeState(this.state.currentFilters);
	}

	//save values
	onChange(name, event, value) {
		if(name == this.SELECTDATA) {
			this.selectData = value
			for(var item in this.props.data) {
				if(this.props.data[item].key == this.selectData && this.props.data[item].type == 'boolean') {
					this.state.currentOperators = ["="]
					this.setState({currentOperators: this.state.currentOperators})
					break
				} else {
					this.state.currentOperators = ["=", "<", ">"]
					this.setState({currentOperators: this.state.currentOperators})
				}
			}
		} else if(name == this.SELECTOPERATOR) {
			this.selectOperator = value;
		} else {
			this.inputValue = value
		}
	}

	buildFilters(filter, i) {
		return (
			<div className={'filter'} key={i}>
				{filter.filter + " " + filter.operator + " " + filter.value}
				<i className={"glyphicon glyphicon-remove filter-icon"} onClick={this.onFilterClick.bind(this, filter)}></i>
			</div>)
	}

	render() {
		this.buildProps('Filter')
		
		if(this.selectData == undefined) {
			if(this.props.data[0])
				this.selectData = this.props.data[0].key
		}

		this.selectFilterDatas = [];
		for(var item in this.props.data) {
			this.selectFilterDatas.push(this.props.data[item].key)
		}

		return (
			<div className={this.className}>
				<div className={"row"}>
					<h4 className={"filter-title"}>Filters</h4>
					<div className={"col-xs-12 col-md-6"}>
						<div className={'col-xs-4'}>
							<FormSelect values={this.selectFilterDatas} className={"filter-select-data"} onChange={this.onChange.bind(this, this.SELECTDATA)}/>
						</div>
						<div className={'col-xs-2'}>
							<FormSelect values={this.state.currentOperators} className={"filter-select-operator"} onChange={this.onChange.bind(this, this.SELECTOPERATOR)}/>
						</div>
						<div className={'col-xs-4'}>
							<FormInput className={"filter-input"} onChange={this.onChange.bind(this, this.INPUTVALUE)}/>
						</div>
						<div className={'col-xs-2'}>
							<Button children={'Ok'} className={'btn-success'} onClick={this.onClick.bind(this)}/>
						</div>
					</div>
					<div className={"col-xs-12 col-md-6"}>
						{this.state.currentFilters.map(this.buildFilters.bind(this))}
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
}
export default BSFilter