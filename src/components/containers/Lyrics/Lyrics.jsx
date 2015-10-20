/**
 * Lyrics
 * ======
 *
 *
 */


import React, { Component, PropTypes } from 'react'

import Panel from '../../templates/Panel/Panel.jsx'
import Search from '../../templates/Search/Search.jsx'
import { NETWORK } from '../../../../config'

import './Lyrics.styl'


/**
 *
 */
export default class Lyrics extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired
	}

	render() {
		const { active } = this.props
		return (
			<Panel active={active} title={`Lyrics`} icon={`Lyrics__Icon`}>
				<Search
					text={'Insert some text to search for lyrics!'}
					action={`${NETWORK.server}/text/lyrics`}
				/>
			</Panel>
		)
	}
}
