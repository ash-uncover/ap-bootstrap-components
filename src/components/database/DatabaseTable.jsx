import React from 'react'
import Base from 'Base'

import { DatabaseRow } from 'index'

class DatabaseTable extends Base {

	constructor(props) {
		super(props)
		this.buttonProps = { className: 'ap-button', onClick: this.onClick.bind(this) }
		this.overlayProps = {}
		this.tooltipProps = { id: 'tooltip' }
		// Component properties
		this.propsInfos = {
			required : {
				head: {}
				body: {}
			},
			optionnal : {
				bsSize: { store: this.buttonProps },
				bsStyle: { store: this.buttonProps },
				block: { defaultValue: false, store: this.buttonProps },
				disabled: { defaultValue: false, store: this.buttonProps },
				onClick: {},
				confirm: {},
				tooltip: { rename: 'children', store: this.tooltipProps },
				tooltipPlacement: { defaultValue: 'top', rename: 'placement', store: this.overlayProps }
			}
		}
	}
	

	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() { return(
		<table>
			<thead>
			</thead>
			<tbody>
			</tbody>
		</table>
	)}
}

export default DatabaseTable;
