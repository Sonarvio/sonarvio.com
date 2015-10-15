/**
 * Suggestions - Player
 * ====================
 *
 *
 */

import React, { Component, PropTypes } from 'react'


export default class Player extends Component {

	static propTypes = {
		src: PropTypes.string.isRequired
	}

	constructor (props) {
		super(props)
		this.state = {
			audio: null,
			// loaded: false,
			playing: false,
			progress: 0
		}
	}

	// componentDidUpdate (props, state) {
	// 	// progress update
	// 	if (this.state.playing === state.playing) {
	// 		return
	// 	}
	// 	const audio = React.findDOMNode(this.refs.audio)
	// 	if (this.state.playing) {
	// 		if (isNaN(audio.duration)) { // not cached
	// 			return audio.addEventListener('loadedmetadata', function startOnReady() {
	// 				audio.removeEventListener('loadedmetadata', startOnReady)
	// 				this.startAudio()
	// 			}.bind(this))
	// 		} // cached source
	// 		return this.startAudio()
	// 	}
	// 	this.stopAudio()
	// }

	render() {
		const { playing, audio } = this.state
		return (
			<div className="Player">
				{/** animate change between start and stop/pause **/}
				<button className="Player__Control" onClick={::this.toggleAudio}>
					{playing ? (
						'||'
					):(
						'>'
					)}
				</button>
				{/**
					TODO:
					- animate progress
				 **/}
				{audio && (
					<div className="Player__Progress">
						<div className="Player__Duration">{audio.duration}</div>
					</div>
				)}
			</div>
		)
	}

	// toggle + load audio
	toggleAudio(){
		// initial creation
		if (!this.state.audio) {
			var audio = new Audio()
			audio.preload = 'auto'
			audio.addEventListener('load', function startOnReady(){
				audio.removeEventListener('load', startOnReady)
				console.log(audio);

				this.setState({ audio })
			})
			audio.src = this.props.src
			// 	if (isNaN(audio.duration)) { // not cached
			// 		return audio.addEventListener('loadedmetadata', function startOnReady() {
			// 			audio.removeEventListener('loadedmetadata', startOnReady)
			// 			this.startAudio()
			// 		}.bind(this))
			// audio.src =
			// 	if (isNaN(audio.duration)) { // not cached
			// 		return audio.addEventListener('loadedmetadata', function startOnReady() {
			// 			audio.removeEventListener('loadedmetadata', startOnReady)
			// 			this.startAudio()
			// 		}.bind(this))
			// 	} // cached source
			// 	return this.startAudio()
			// new Audio() // only literal ->
		}
		// / 	const audio = React.findDOMNode(this.refs.audio)
		// if (this.state.playing) {
		// 	if (isNaN(audio.duration)) { // not cached
		// 		return audio.addEventListener('loadedmetadata', function startOnReady() {
		// 			audio.removeEventListener('loadedmetadata', startOnReady)
		// 			this.startAudio()
		// 		}.bind(this))
		// 	} // cached source
		// 	return this.startAudio()
		// }
		// this.stopAudio()
	}


	// startAudio(){
	// 	const audio = React.findDOMNode(this.refs.audio)
	// 	audio.addEventListener('timeupdate', this.updateAudio)
	// 	// audio.addEventListener('ended', this.toggleAudio)
	// 	this.setState({ // remaining ?
	// 		progress: 0
	// 	})
	// 	audio.play()
	// }
	//
	// stopAudio(){
	// 	const audio = React.findDOMNode(this.refs.audio)
	// 	// audio.readyState ?
	// 	audio.removeEventListener('timeupdate', this.updateAudio)
	// 	// audio.removeEventListener('ended', this.toggleAudio)
	// }
	//
	// // time change
	// updateAudio(){
	// 	const audio = React.findDOMNode(this.refs.audio)
	// 	const progress = parseFloat((audio.currentTime/audio.duration).toFixed(2)) * 100
	// 	this.setState({	progress }) // remaining ? // const remaining = 100 - (100 * progress)
	// }

}
