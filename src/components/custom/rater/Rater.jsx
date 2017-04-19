import React from 'react'
import RaterData from 'components/custom/rater/RaterData'

import { Col, Panel, PanelBody, PanelFooter, CodeXml, RaterStar } from 'lib/exports'

import './Rater.scss'

class Rater extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		RaterData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		RaterData.unregister()
	}

	onDataUpdate() {
		this.setState({ RaterData: RaterData })
	}

	render() {
		return (
			<div className='ap-ct-rater'>
                <h1>Raters</h1>

                <h2>Rater star</h2>
                <p>Rater star gives a quick visual indication using stars. it takes <code>value</code> from 0 to 5 as input.</p>

                <Panel>
                    <PanelBody>
                        <Col xs={4} sm={2}><RaterStar value={0}/></Col>
                        <Col xs={4} sm={2}><RaterStar value={1}/></Col>
                        <Col xs={4} sm={2}><RaterStar value={2}/></Col>
                        <Col xs={4} sm={2}><RaterStar value={3}/></Col>
                        <Col xs={4} sm={2}><RaterStar value={4}/></Col>
                        <Col xs={4} sm={2}><RaterStar value={5}/></Col>
                    </PanelBody>
                    <PanelFooter>
                        <h5>React code</h5>
                        <CodeXml markup='RaterStar' att={[{name:'value',value:'{3}'}]}/>
                    </PanelFooter>
                    <PanelFooter>
                        <h5>HTML output</h5>
                        <CodeXml markup='div' att={[{name:'class',value:'ap-rater-star'}]}>
                            <CodeXml markup='div' att={[{name:'class',value:'glyphicon ap-glyphicon glyphicon-star ap-rater-star-full'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'glyphicon ap-glyphicon glyphicon-star ap-rater-star-full'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'glyphicon ap-glyphicon glyphicon-star ap-rater-star-full'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'glyphicon ap-glyphicon glyphicon-star-empty ap-rater-star-empty'}]} />
                            <CodeXml markup='div' att={[{name:'class',value:'glyphicon ap-glyphicon glyphicon-star-empty ap-rater-star-empty'}]} />
                        </CodeXml>
                    </PanelFooter>
                </Panel>
            </div>
		)
	}
}
export default Rater
