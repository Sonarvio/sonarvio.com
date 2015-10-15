/**
 * Record
 * ======
 *
 * Use '.getUseMedia' to retrieve audio data (PCM) from the microphone.
 *
 * References:
 * - https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/
 * - http://papers.traustikristjansson.info/?p=486
 * - http://stackoverflow.com/questions/26532328/how-do-i-get-audio-data-from-my-microphone-using-audiocontext-html5
 * - http://stackoverflow.com/questions/11979528/record-audio-stream-from-getusermedia
 * - https://github.com/streamproc/MediaStreamRecorder
 */

import React, { Component, PropTypes } from 'react'

import Panel from '../../templates/Panel/Panel.jsx'

import './Record.styl'


/**
 *
 */
export default class Record extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired
	}

	render() {
		return (
			<Panel active={this.props.active} rotate={this.props.rotate} title={`Record`} icon={`Record__Icon`}>
				<p className="Record__Message">
					<span>
						Since there is currently no reliable open source acoustic fingerprint implementation available,<br/>
						recoding got disabled for now. For more details checkout <a className="Record__Link"
					 href="https://github.com/Sonarvio/sonarvio-editor/issues/1" target="_blank">this issue</a>.
					</span>
				</p>
			</Panel>
		)
	}
}
