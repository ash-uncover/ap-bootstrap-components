import React from 'react'
// Core modules
import Dispatcher from 'core/Dispatcher'
import StoreRegistry from 'core/StoreRegistry'
// Helper modules
import AppHelper from 'helpers/AppHelper'
import ImageHelper from 'helpers/ImageHelper'
// Custom components
import { Button } from 'index'
import Base from 'Base'
// Util modules
import APFiles from 'utils/javascript/APFiles'
import MimeTypes from 'utils/javascript/MimeTypes'

import './ap-image.scss'

class ImageUploader extends Base {
	
	constructor(props) {
		super(props)
		this.state = {
			error: '',
			loading: false,
			selected: false
		}
		// Internal properties
		this.imageProps = {

		}
		// Sub component properties
		this.inputFileProps = {

		}
		this.buttonSubmitProps = {
			block: true,
			disabled: true,
			bsStyle: 'default',
			onClick: this.onSubmit.bind(this)
		}
		// Component properties
		this.propsInfos = {
			required: {
				onUploadComplete: {}
			},
			optionnal: {
				onChange: {},
				onSubmit: {},
				maxSize: { defaultValue: 2100000, store: this.imageProps },
				types: { defaultValue: MimeTypes.IMAGES, store: this.imageProps }
			}
		}
	}

	// View callbacks //
	// --------------------------------------------------------------------------------

	onChange(e) {
		e.preventDefault()
		if (this.fileInput.files.length && this.fileInput.files[0]) {
			let file = this.fileInput.files[0]
			let extOk = APFiles.checkExtension(file, MimeTypes.buildExtension(this.imageProps.types))
			if (!extOk) {
				this.buttonSubmitProps.bsStyle = 'warning'
				this.buttonSubmitProps.disabled = true
				this.setState({ error: 'Type de fichier non supporté' })
				return
			}
			let sizeOk = APFiles.checkSize(file, this.imageProps.maxSize)
			if (!sizeOk) {
				this.buttonSubmitProps.bsStyle = 'warning'
				this.buttonSubmitProps.disabled = true
				this.setState({ error: 'Le fichier sélectionné est trop gros (taille max: 2Mo)' })
				return
			}
			this.buttonSubmitProps.bsStyle = 'success'
			this.buttonSubmitProps.disabled = false
			this.setState({ error: '' })
		}
	}

	onSubmit(e) {
		if (this.fileInput.files.length && this.fileInput.files[0]) {
			let file = this.fileInput.files[0]

			this.setState({ loading: true })
			
			let data = {
				name: 'img',
				file: file
			}
			AppHelper.setBusy(true).
			then(function () {
				return ImageHelper.postImage(data)
			}).
			then(function (oResult) {
				setTimeout(function () { AppHelper.setBusy() }, 200)
				if (this.props.onUploadComplete) {
					this.props.onUploadComplete(oResult.id);
				}
				this.buttonSubmitProps.bsStyle = 'default'
				this.buttonSubmitProps.disabled = true
				this.setState({ loading: false });
			}.bind(this)).
			catch (function (error) {
				setTimeout(function () { AppHelper.setBusy() }, 200)
				this.setState({ 
					loading: false,
					error: error
				});
				console.error('failed to upload file')
				console.error(error)
			})
		} else {
			console.warning('no file selected');
		}
	}

	// Rendering functions //
	// --------------------------------------------------------------------------------

	render() {
		this.buildProps('ImageUploader')
		return (
			<div className='ap-file-uploader'>
				<input 
					ref={(c) => this.fileInput = c} 
					type='file' 
					onChange={this.onChange.bind(this)}
					accept={MimeTypes.buildAccept(this.imageProps.types)} />
				{this.state.error ? 
					<div className='ap-error'>{this.state.error}</div>
				: <br/>}
				<Button {...this.buttonSubmitProps}>
					{this.state.loading ? 'Chargement...' : 'Envoyer'}
				</Button>
			</div>
		)
	}
}
export default ImageUploader