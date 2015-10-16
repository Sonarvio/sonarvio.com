/**
 * Info
 * ====
 *
 *
 */

import React, { Component, PropTypes } from 'react'

import FAQ from './FAQ/FAQ.jsx'

import ArchitectureOverview from './Architecture-Overview.png'

import './Info.styl'


/**
 *
 */
export default class Info extends Component {
	render(){
		return (
			<div className="Info" id="info">{/** natural link anchor **/}
				<h2 className="Info__Header">Info</h2>

				<div className="Info__Center">
					<div className="Info__Description">
						<p>
							<b>Sonarvio</b> is a system for song identification using modern web technologies.
							It consists of a web application and browser extension for universal access.
							While the app allows to define a search based on specific meta information,
							the extension provides an interface to extract the source data of videos
							for further lookups.
						</p>
						<p>
							All material and code is available at <a href="http://github.com/Sonarvio" target="_blank">Github</a>.
						</p>
						<p>
							The presentation from the BerlinJS talk can be found at <a href="http://slides.com/autarc/sonarvio/" target="_blank">Slides</a>.
						</p>
					</div>
					<figure className="Info__Figure">
						<a className="Info__Link"	href={ArchitectureOverview} target="_blank" itemProp="contenUrl">
							<image className="Info__Image" src={ArchitectureOverview} alt="Architecture Overview"
								title="Architecture Overview" itemProp="thumbnail"/>
						</a>
						<figcaption itemProp="caption description">
							Architecture Overview
						</figcaption>
					</figure>
				</div>

				<div className="Info__Center">
					<FAQ/>
				</div>

			</div>
		)
	}
}
