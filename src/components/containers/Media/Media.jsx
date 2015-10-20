/**
 * Media
 * =====
 *
 *
 */

import React, { Component, PropTypes } from 'react'

import Panel from '../../templates/Panel/Panel.jsx'
import Search from '../../templates/Search/Search.jsx'

import { NETWORK } from '../../../../config'

import './Media.styl'


/**
 *
 */
export default class Media extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired
	}

	constructor (props) {
		super(props)
		this.state = {
			type: null
		}
	}

	componentDidUpdate (prevProps, prevState) {
		// reset on 'leave'
		if (this.props.active !== prevProps.active) {
			this.setState({
				type: null
			})
		}
	}

	render() {
		const { active } = this.props
		const { type } = this.state
		return (
			<Panel active={active} title={`Media`} icon={`Media__Icon`}>
				<div className="Media__Content">
					{!type ? (
						<div className="Media__Type">
							<button className="Media__Button" onClick={::this.setType}>Movie</button>
							<button className="Media__Button" onClick={::this.setType}>TV Show</button>
						</div>
					) : this.getInputElements()}
				</div>
			</Panel>
		)
	}

	setType (e) {
		this.setState({
			type: e.target.textContent
		})
	}

	getInputElements(){
		const { type } = this.state

		switch (type) {
			case 'Movie':
				return (
					<div className="Media__Movie">
						<Search
							className="Media__MovieSearch"
							text={'Insert the title of a movie to get its songs!'}
							action={`${NETWORK.server}/text/media`}
							params={{
								type: 'movie'
							}}
						/>
					</div>
				)
				break
			case 'TV Show':
				return (
					<div className="Media__Show">
						<p>
							The search based on TV shows will be available soon. <br/>
						<a className="Media__Link" href="https://github.com/Sonarvio/tunefind" target="_blank">The client</a>	is already implementend but still requires a proper user interface to select season and episode.
						</p>
					</div>
				)
				break
			default:
				console.error(`Invalid selection - button "${type}" is not defined!`)
				return null
		}
	}
}
