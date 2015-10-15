/**
 * Website
 * =======
 *
 *
 */

import React, { Component, PropTypes } from 'react'

import Panel from '../../templates/Panel/Panel.jsx'

import './Website.styl'


/**
 *
 */
export default class Website extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired
	}

	render() {
		return (
			<Panel active={this.props.active} title={`Website`} icon={`Website__Icon`}>
				<div className="Website__Content">
					<p>
						To access uncompressed media data from 3rd party websites like Youtube or Vimeo<br/>
					a browser extension is required. Its currently available for following systems:
						<a className="Website__Link" href="http://sonarvio.com/__/sonarvio.crx" target="blank">Chrome Extension</a>
						<a className="Website__Link" href="http://sonarvio.com/__/sonarvio.xpi" target="blank">Firefox Extension</a>
					</p>
				</div>
			</Panel>
		)
	}
}
