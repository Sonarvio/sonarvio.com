/**
 * File
 * ====
 *
 *
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Editor from 'sonarvio-editor'

import Panel from '../../templates/Panel/Panel.jsx'

import './File.styl'


/**
 *
 */
export default class File extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired
	}

	constructor (props) {
		super(props)
		this.state = {
			source: null,
			url: null
		}
	}

	render() {
		const { source, url } = this.state
		return (
			<Panel active={this.props.active} title={`File`} icon={`File__Icon`}>
				<div className="File__Content">
					{!source ? (
						<form>
							<input className="File__Input" type="file" onChange={::this.handleChange}/>
						</form>
					) : (
						<div className="File__Display">
							<Editor source={source} video={document.getElementById('player')}/>
						</div>
					)}
				</div>
				<video className={classnames({
						'File__Player': true,
						'File__Player--active': url
					})} src={url} id="player" autoPlay={true} controls={true}/>
			</Panel>
		)
	}

	handleChange (e) {
		const { target } = e
		const { files } = target
		const file = files[0]
		const url = window.URL.createObjectURL(file)
		var reader = new FileReader()
		reader.onload = (e) => {
			const data = e.target.result
			this.setState({
				source: new Uint8Array(data),
				url
			})
			this.props.changeSize(2000)
		}
		reader.readAsArrayBuffer(file)
	}
}
