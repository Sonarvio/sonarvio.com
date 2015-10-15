/**
 * Lyrics
 * ======
 *
 *
 */

import { stringify } from 'querystring'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


import { NETWORK } from '../../../../config'
import { panel } from '../../../handler/creators'
import Panel from '../../templates/Panel/Panel.jsx'
import Suggestions from '../../templates/Suggestions/Suggestions.jsx'


import './Lyrics.styl'

@connect(null, panel)
export default class Lyrics extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired
	}

	constructor (props) {
		super(props)
		this.state = {
			query: '',
			error: false,
			pending: false,
			results: []
		}
	}

	render() {
		const { active } = this.props
		const { query, error, pending, results } = this.state
		return (
			<Panel active={active} title={`Lyrics`} icon={`Lyrics__Icon`}>
				{!pending ? (
					<div>
						<p>
							Insert some text to search for lyrics!
						</p>
						<form method="GET" action={`${NETWORK.server}/text/lyrics`} onSubmit={::this.sendForm}>
							<input className="Lyrics__Input"
								type="text" name="query" value={query} onChange={::this.updateQuery}/>
							<input className="Lyrics__Submit" type="submit"/>
						</form>
					</div>
				) : (<div className="Lyrics__Spinner"/>)}
				{results && (<Suggestions results={results}/>)}
				{error && (<div>Unfortunatly an Error occoured during your request :(</div>)}
			</Panel>
		)
	}

	updateQuery (e) {
		this.setState({
			query: e.target.value
		})
	}

	sendForm (e) {
		e.preventDefault()
		if (!this.state.query.length) {
			return console.log('invalid length')
		}
		const url = e.target.action
		const query = stringify({
			query: this.state.query
		})
		this.setState({	pending: true	}, () => {
			fetch(`${url}?${query}`).then((res) => res.json()).then((results) => {
				const size = results.length * 5
				this.setState({
					pending: false,
					results
				}, () => {
					const entrySize = 156 + 2 * 20 // ~ size+ margin
					this.props.changeSize(entrySize * results.length)
				})
			}).catch((error) =>{
				console.error(error)
				this.setState({ error: true })
			})
		})
	}
}
