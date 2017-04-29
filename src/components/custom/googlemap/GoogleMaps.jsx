import React from 'react'
import GoogleMapsData from 'components/custom/googlemap/GoogleMapsData'

import { Panel, CodeXml, CodeJson, Table, Button, Google } from 'lib/exports'

import './GoogleMaps.scss'

class GoogleMaps extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		GoogleMapsData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		GoogleMapsData.unregister()
	}

	onDataUpdate() {
		this.setState({ GoogleMapsData: GoogleMapsData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-googlemap' id='ap-rb-googlemap'>
				<h1>Google Autocomplete</h1>

				<h2>Basic Example</h2>

				<p>The <code>{'<GoogleAutocomplete>'}</code> component is displayed as an input, automatically integrating bootstrap classes.</p>
				<p>It emmits an <code>onChange</code> event when a new address is selected by the user.</p>
				
				<Panel>
					<Panel.Body>
						<h4>Example</h4>
						<Google.Autocomplete {...this.state.GoogleMapsData.autocompleteData} />
						<br/>
						<Table hover>
							<Table.Head>
								<Table.TR><Table.TH>Field</Table.TH><Table.TH>Value</Table.TH></Table.TR>
							</Table.Head>
							<Table.Body>
								<Table.TR><Table.TH>Address</Table.TH><Table.TD>{this.state.GoogleMapsData.address.address}</Table.TD></Table.TR>
								<Table.TR><Table.TH>Postal code</Table.TH><Table.TD>{this.state.GoogleMapsData.address.postalCode}</Table.TD></Table.TR>
								<Table.TR><Table.TH>City</Table.TH><Table.TD>{this.state.GoogleMapsData.address.city}</Table.TD></Table.TR>
								<Table.TR><Table.TH>Country</Table.TH><Table.TD>{this.state.GoogleMapsData.address.country}</Table.TD></Table.TR>
								<Table.TR><Table.TH>lattitude</Table.TH><Table.TD>{this.state.GoogleMapsData.address.lattitude}</Table.TD></Table.TR>
								<Table.TR><Table.TH>longitude</Table.TH><Table.TD>{this.state.GoogleMapsData.address.longitude}</Table.TD></Table.TR>
							</Table.Body>
						</Table>
					</Panel.Body>
					<Panel.Footer>
						<h5>React code</h5>
						<CodeXml markup='GoogleAutocomplete' att={[{name:'onChange',value:'function () { ... } '}]} />
					</Panel.Footer>
				</Panel>

				<h2>Initial value</h2>

				<p>A location can be sent to the <code>{'<GoogleAutocomplete>'}</code> by providing a <code>lattitude</code> and <code>longitute</code> in the <code>location</code> property.</p>
				
				<Panel>
					<Panel.Body>
						<h4>Example</h4>
						<Google.Autocomplete {...this.state.GoogleMapsData.autocomplete2Data} />
						<br/>
						<Button {...this.state.GoogleMapsData.buttonResetData}>Reset</Button>
					</Panel.Body>
					<Panel.Footer>
						<h5>React code</h5>
						<CodeJson>
                        	{"let myLocation={ lattitude: 48.8697246, longitude: 2.3083392999999433}"}
                    	</CodeJson>
						<CodeXml markup='GoogleAutocomplete' att={[{name:'location',value:'{myLocation}'}]} />
					</Panel.Footer>
				</Panel>

				<h1>Google Maps</h1>

			</div>
		)
	}
}
export default GoogleMaps