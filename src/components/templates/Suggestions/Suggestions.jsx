/**
 * Suggestions
 * ===========
 *
 *
 */

import React, { Component, PropTypes } from 'react'

import Entry from './Entry/Entry.jsx'

import './Suggestions.styl'


export default class Suggestions extends Component {

	static propTypes = {
		results: PropTypes.array.isRequired
	}

	render(){
		return (
			<div className="Suggestions">
				<ul className="Suggestions__List">
					{this.props.results.map((result, i) => {
						return (
							<li className="Suggestions__Entry" key={i}>
								<Entry {...result}/>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
