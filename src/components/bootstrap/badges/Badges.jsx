import React from 'react'
import BadgesData from 'components/bootstrap/badges/BadgesData'

import { Panel, PanelBody, PanelFooter, CodeXml, Button, Label, Badge } from 'lib/exports'

import './Badges.scss'

class Badges extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		BadgesData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		BadgesData.unregister()
	}

	onDataUpdate() {
		this.setState({ BadgesData: BadgesData })
	}

	render() { return (
		<div className='ap-rb-section ap-rb-badges' id='ap-badges'>
			<h1>Badges</h1>
			<p>Easily highlight new or unread items by adding a <code>{'<Badge>'}</code> to links, Bootstrap navs, and more.</p>
			<p>When there are no new or unread items, badges will simply collapse provided no content exists within.</p>
			<Panel>
				<PanelBody className='ap-rb-badges-basic'>
					<h4>Example</h4>
					<div>
						<a href='#'>Inbox <Badge value={42}/></a>
					</div>
					<div>
						<Button bsStyle='primary'>Messages <Badge value={4}/></Button>
					</div>
					<div>
						<Button bsStyle='default'>Messages <Badge /></Button>
					</div>
				</PanelBody>
				<PanelFooter>
					<CodeXml markup='a' att={[{name:'href',value:'#'}]}>
						Inbox <CodeXml markup='Badge' att={[{name:'value',value:'{42}'}]} inline/>
					</CodeXml>
					<CodeXml markup='Button' att={[{name:'bsStyle',value:'primary'}]}>
						Messages <CodeXml markup='Badge' att={[{name:'value',value:'{4}'}]} inline/>
					</CodeXml>
					<CodeXml markup='Button' att={[{name:'bsStyle',value:'default'}]}>
						Messages <CodeXml markup='Badge' inline/>
					</CodeXml>
				</PanelFooter>
			</Panel>

		</div>
	)}
}
export default Badges
