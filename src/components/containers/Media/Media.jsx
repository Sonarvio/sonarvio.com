/**
 * Media
 * =====
 *
 *
 */

import React, { Component, PropTypes } from 'react'

import Panel from '../../templates/Panel/Panel.jsx'

import './Media.styl'


/**
 *
 */
export default class Media extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired
	}

	render() {
		return (
			<Panel active={this.props.active} title={`Media`} icon={`Media__Icon`}>
				<div className="Media__Content">
					<p>Search based on series & movies will be available soon. <br/>
				  <a className="Media__Link" href="https://github.com/Sonarvio/tunefind" target="_blank">The client</a>	is already implementend	and just requires a proper user interface.
					</p>
				</div>
			</Panel>
		)
	}
}
