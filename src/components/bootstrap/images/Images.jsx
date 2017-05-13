import React from 'react'
import ImagesData from 'components/bootstrap/images/ImagesData'

import { Panel, CodeXml, CodeXmlGroup, Grid, Image } from 'lib/exports'

import './Images.scss'

class Images extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		ImagesData.register(this.onDataUpdate.bind(this))
	}

	componentWillUnmount() {
		ImagesData.unregister()
	}

	onDataUpdate() {
		this.setState({ ImagesData: ImagesData })
	}

	render() {
		return (
			<div className='ap-rb-section ap-rb-images' id='ap-rb-images'>
				<h1>Images</h1>

				<h2>Responsive images</h2>
				<p>Images in Bootstrap 3 can be made responsive-friendly via the addition of the <code>responsive</code> property. This applies <code>max-width: 100%;</code>, <code>height: auto;</code> and <code>display: block;</code> to the image so that it scales nicely to the parent element.</p>

				<Panel>
					<Panel.Body>
						<h4>Example</h4>
						<Grid.Col sm={4} smOffset={4}>
							<Image src='/assets/img/image_big.png' responsive />
						</Grid.Col>
					</Panel.Body>
					<Panel.Footer>
						<h5>React code</h5>
						<CodeXml markup='Image' att={[{name:'responsive'}]} />
					</Panel.Footer>
					<Panel.Footer>
						<h5>HTML output</h5>
						<CodeXml markup='img' />
					</Panel.Footer>
				</Panel>

				<h2>Image shapes</h2>
				<p>Add the <code>shape</code> property to an <code>{'<Image>'}</code> element to easily style images in any project.</p>

				<Panel>
					<Panel.Body className='ap-rb-labels-variations'>
						<h4>Example</h4>
						<Grid.Col sm={4}>
							<Image shape='rounded' src='/assets/img/image.png' />
						</Grid.Col>
						<Grid.Col sm={4}>
							<Image shape='circle' src='/assets/img/image.png' />
						</Grid.Col>
						<Grid.Col sm={4}>
							<Image shape='thumbnail' src='/assets/img/image.png' />
						</Grid.Col>
					</Panel.Body>
					<Panel.Footer>
						<h5>React code</h5>
						<CodeXmlGroup>
							<CodeXml markup='Image' att={[{name:'shape',value:'rounded'}]} />
							<CodeXml markup='Image' att={[{name:'shape',value:'circle'}]} />
							<CodeXml markup='Image' att={[{name:'shape',value:'thumbnail'}]} />
						</CodeXmlGroup>
					</Panel.Footer>
					<Panel.Footer>
						<h5>HTML output</h5>
						<CodeXmlGroup>
							<CodeXml markup='img' att={[{name:'class',value:'ap-image img-rounded'}]} />
							<CodeXml markup='img' att={[{name:'class',value:'ap-image img-circle'}]} />
							<CodeXml markup='img' att={[{name:'class',value:'ap-image img-thumbnail'}]} />
						</CodeXmlGroup>
					</Panel.Footer>
				</Panel>
			</div>
		)
	}

}
export default Images
