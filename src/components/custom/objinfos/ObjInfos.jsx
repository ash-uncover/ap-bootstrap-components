import React from 'react'
import ObjInfosData from 'components/custom/objinfos/ObjInfosData'

import { Col, Panel, PanelBody, PanelFooter, CodeXml, ObjInfo } from 'lib/exports'

import './ObjInfos.scss'

class ObjInfos extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		ObjInfosData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		ObjInfosData.unregister()
	}

	onDataUpdate() {
		this.setState({ ObjInfosData: ObjInfosData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-ct-infos' id='ap-infos'>
                <h1>ObjInfos</h1>

                <h2>Basic Example</h2>
                <p>Object info builds a visual representation of a JSON object. It only supports direct values for now.</p>

                <Panel>
                    <PanelBody>
                        <h4>Example</h4>
                        <ObjInfo obj={{data1: 'test1', data2: 'test2'}}/>
                    </PanelBody>
                    <PanelFooter>
                        <h5>React code</h5>
                        <CodeXml markup='ObjInfo' att={[{name:'obj',value:'{data1: "test1", data2: "test2"}'}]}/>
                    </PanelFooter>
                    <PanelFooter>
                        <h5>HTML output</h5>
                        <CodeXml markup='div' att={[{name:'class',value:'row ap-row'}]}>
                            <CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-6'}]}>data1</CodeXml>
                            <CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-6'}]}>test1</CodeXml>
                            <CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-6'}]}>data2</CodeXml>
                            <CodeXml markup='div' att={[{name:'class',value:'ap-col col-md-6'}]}>test2</CodeXml>
                        </CodeXml>
                    </PanelFooter>
                </Panel>
            </div>
		)
	}
}
export default ObjInfos
