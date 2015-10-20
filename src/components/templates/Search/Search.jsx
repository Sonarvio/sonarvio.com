/**
 * Search
 * ======
 *
 *
 */

import { stringify } from 'querystring'

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

import Suggestions from '../../templates/Suggestions/Suggestions.jsx'
import { panel } from '../../../handler/creators'

import './Search.styl'


/**
 *
 */
@connect(null, panel)
export default class Search extends Component {

	static propTypes = {
		text: PropTypes.string.isRequired,
		action: PropTypes.string.isRequired,
		params: PropTypes.object,
		className: PropTypes.string
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

	componentWillUnmount(){
		this.props.changeSize(null)
	}

	render() {
		const { className, text, action } = this.props
		const { query, error, pending, results } = this.state
		return (
			<div className={classnames(['Search', className])}>
				{!pending ? (
					<div>
						<p>{text}</p>
						<form method="GET" action={action} onSubmit={::this.sendForm}>
							<input className="Search__Input"
								type="text" name="query" value={query} onChange={::this.updateQuery}/>
							<input className="Search__Submit" type="submit"/>
						</form>
					</div>
				) : (!error ? (<div className="Search__Spinner"/>) : (
					<div className="Search__Error">
						Unfortunately an Error occoured during the request. Please try it later :(
					</div>
				))}
				{results && (<Suggestions results={results}/>)}
			</div>
		)
	}

	updateQuery (e) {
		this.setState({
			query: e.target.value,
		})
	}

	sendForm (e) {
		e.preventDefault()
		if (!this.state.query.length) {
			return console.warn('Invalid length!')
		}
		const url = e.target.action
		const query = stringify({
			...this.props.params,
			query: this.state.query
		})
		this.setState({
			pending: true,
			results: []
		}, () => {
			this.props.changeSize(null)
			fetch(`${url}?${query}`).then((res) => res.json()).then((results) => {
				if (results.error) {
					throw new Error(results.error)
				}
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
