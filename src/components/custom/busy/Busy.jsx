import React from 'react'
import BusyData from 'components/custom/busy/BusyData'

import { Panel, PanelBody, PanelFooter, CodeXml, BusyBars, BusyBubbles, BusyCircles } from 'lib/exports'

import './Busy.scss'

class Busy extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		BusyData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		BusyData.unregister()
	}

	onDataUpdate() {
		this.setState({ BusyData: BusyData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-ct-busy' id='ap-busy'>
                <h1>Busy indicators</h1>

                <h2>Busy bubbles</h2>
                <p>Busy bubbles is a continous indicator that can be used over a component to mark its busy state.</p>

                <Panel>
                    <PanelBody>
                        <BusyBubbles />
                    </PanelBody>
                    <PanelFooter>
                        <h5>React code</h5>
                        <CodeXml markup='BusyBubbles' />
                    </PanelFooter>
                    <PanelFooter>
                        <h5>HTML output</h5>
                        <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bubbles'}]}>
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bubble ap-busy-bubble-1'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bubble ap-busy-bubble-2'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bubble ap-busy-bubble-3'}]} />
                        </CodeXml>
                    </PanelFooter>
                </Panel>
                
                <h2>Busy circles</h2>
                <p>Busy circles is a continous indicator that can be used to display content while an item is loading.</p>

                <Panel>
                    <PanelBody>
                        <BusyCircles />
                    </PanelBody>
                    <PanelFooter>
                        <h5>React code</h5>
                        <CodeXml markup='BusyCircles' />
                    </PanelFooter>
                    <PanelFooter>
                        <h5>HTML output</h5>
                        <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circles'}]}>
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circles-container'}]}>
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-1'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-2'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-3'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-4'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-5'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-6'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-7'}]} />
                                <CodeXml markup='div' att={[{name:'class',value:'ap-busy-circle ap-busy-circle-8'}]} />
                            </CodeXml>
                        </CodeXml>
                    </PanelFooter>
                </Panel>

                <h2>Busy bars</h2>
                <p>Busy .</p>

                <Panel>
                    <PanelBody>
                        <BusyBars />
                    </PanelBody>
                    <PanelFooter>
                        <h5>React code</h5>
                        <CodeXml markup='BusyBars' />
                    </PanelFooter>
                    <PanelFooter>
                        <h5>HTML output</h5>
                        <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bars'}]}>
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bar ap-busy-bar-1'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bar ap-busy-bar-2'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bar ap-busy-bar-3'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bar ap-busy-bar-4'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'ap-busy-bar ap-busy-bar-5'}]} />
                        </CodeXml>
                    </PanelFooter>
                </Panel>
            </div>
		)
	}

}
export default Busy
