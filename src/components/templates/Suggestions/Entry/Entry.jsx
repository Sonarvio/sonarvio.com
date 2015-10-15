/**
 * Suggestions - Entry
 * ===================
 *
 *
 */

import React, { Component, PropTypes } from 'react'

import moment from 'moment'

import Player from './Player/Player.jsx'

import './Entry.styl'


/**
 * 
 */
export default class Entry extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		artist: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		cover: PropTypes.string.isRequired,
		release: PropTypes.string,
		preview: PropTypes.string
	}

	render() {
		const { title, artist, link, cover, release, preview, more } = this.props
		return (
			<div className="Entry">
				<div className="Entry__Info">
					<div className="Entry__Cover">
						<img className="Entry__Picture" src={cover}/>
					</div>
					<div className="Entry__Meta">
						<p>{title} ({moment(release).format('YYYY')})</p>
						<p>{artist}</p>
						{more && (<p>{more}</p>)}
					</div>
					{/**
						TODO:
						- include preview track
						preview && (
							<div className="Entry__Media">
								<Player src={preview}/>
							</div>
						)
					**/}
				</div>
				<div className="Entry__Banner">
					<a className="Entry__Link" href={link} target="_blank">Info</a>
				</div>
			</div>
		)
	}
}
