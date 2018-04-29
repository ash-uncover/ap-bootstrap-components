import React from 'react'
import GoogleMapsData from 'components/custom/googlemap/GoogleMapsData'

import { Panel, CodeXml, CodeJson, Table, Button, Google } from 'lib/exports'

import './Google.scss'

class GoogleMaps extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentWillMount() {
		GoogleMapsData.register()
	}

	componentWillUnmount() {
		GoogleMapsData.unregister()
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-googlemap' id='ap-rb-googlemap'>
				<h1>Google Map</h1>

				<h2>Basic Example</h2>

				<p>The <code>{'<GoogleMap>'}</code> component.</p>
				<p>It emmits an <code>onChange</code> event when a new address is selected by the user.</p>
				
				<Panel>
					<Panel.Body>
						<h4>Example</h4>
						<Google.Map centerLattitude={48.863517} centerLongitude={2.347739}/>
						<br/>
					</Panel.Body>
					<Panel.Footer>
						<h5>React code</h5>
						<CodeXml markup='GoogleMap' att={[{name:'onChange',value:'function () { ... } '}]} />
					</Panel.Footer>
				</Panel>
			</div>
		)
	}
}
export default GoogleMaps