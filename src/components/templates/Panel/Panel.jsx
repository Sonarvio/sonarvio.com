/**
 * Panel
 * =====
 *
 * ~ higher ordered component for the regular controllers
 */

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

import './Panel.styl'


/**
 *
 */
export default class Panel extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired,
		rotate: PropTypes.number, //
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
		// collapsed -> // title is used as id and ca be shown
		// -> use a store to checkout if set or not ->
		// || also allows to ignore the upper handler - as it can be defined directly at this level
		// collapsed: PropTypes.boolean.required
		// onClose: PropTypes.function.required
	}

	static defaultProps = {
		rotate: 0
	}

	render(){
		return (
			<section className={classnames({
					'Panel': true,
					'Panel--active': this.props.active,
					[this.props.title]: true
				})}>
				<div className="Panel__Box">
					{!this.props.active ? (
						<Link className="Panel__Trigger" to={`/${this.props.title.toLowerCase()}`}
							style={{ transform: `rotateZ(${this.props.rotate}deg)` }}>
							<span className={classnames(['Panel__Icon', this.props.icon])}/>
							<h2 className="Panel__Title">{this.props.title}</h2>
						</Link>
					) : (
						<div className="Panel__View">
							<div className="Panel__Content">{this.props.children}</div>
							<Link className="Panel__Close" to={`/`}>X</Link>
						</div>
					)}
				</div>
			</section>
		)
	}
}
