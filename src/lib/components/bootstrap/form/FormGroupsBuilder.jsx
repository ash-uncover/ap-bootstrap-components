import React from 'react'
import Base from 'lib/components/Base'

import { FormGroup, FormLabel, FormInput, Col, FormGroupBuilder2 } from 'lib/exports'

class BSFormGroupsBuilder extends Base {

	constructor(props) {
		super(props)
		// Base classes
		this.baseClasses = []
		// Component props
		this.propsInfos = {
			required : {
				groups: {}
			},
			optionnal : {
			}
		}
	}

	
	// Rendering functions //
	// --------------------------------------------------------------------------------

	buildFormGroups() {
		var groups = this.props.groups || [];
		let FormGroups = groups.map(function(group) {
			return <FormGroupBuilder2 {...group} />
		}.bind(this))
		return FormGroups
	}

	render() {
		this.buildProps('FormGroupsBuilder')
		return (
			<div>
				{this.buildFormGroups()}
			</div>
		)
	}
}
export default BSFormGroupsBuilder