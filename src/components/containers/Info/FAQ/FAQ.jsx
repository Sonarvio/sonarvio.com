/**
 * Info - FAQ
 * ==========
 */

import React, { Component, PropTypes } from 'react'

import './FAQ.styl'


/**
 *
 */
export default class FAQ extends Component {

	render(){
		return (
			<div className="FAQ">
				<h3 className="FAQ__Title" id="faq">Frequently Asked Questions (FAQ)</h3>
				<ul className="FAQ__List">

					<li className="FAQ__Entry" id="faq-01">
						<h6 className="FAQ__Question">
							I couldn't find information about a song through its text or origin.<br/>
							Any recommandation how to get started ?
						</h6>
						<div className="FAQ__Answer">
							<p>
								There are serveral communities in which people help each other finding songs.<br/>
								Following could perhaps provide some aid:
							</p>
							<ul>
								<li><a href="http://www.what-song.com" target="_blank">what-song.com</a></li>
								<li><a href="http://www.watzatsong.com" target="_blank">watzatsong.com</a></li>
							</ul>
						</div>
					</li>

					<li className="FAQ__Entry" id="faq-02">
						<h6 className="FAQ__Question">
							Why is half of the options (File, Record, Website) not available yet ?
						</h6>
						<div className="FAQ__Answer">
							<p>
								An acoustic fingerprint implementation which works with partial content	is currently missing.<br/>
								For more details checkout <a href="https://github.com/Sonarvio/sonarvio-editor/issues/1"
								target="_blank">this issue</a>.
							</p>
						</div>
					</li>

					<li className="FAQ__Entry" id="faq-02">
						<h6 className="FAQ__Question">
							You still didn't said why...
						</h6>
						<div className="FAQ__Answer">
							<p>
								Don't worry - I had probably the same issue as well and missed to talk
								about the aspect accidentally. <br/>
								Just drop me a message via <a href="https://github.com/Autarc" target="_blank">Github</a> / <a href="https://twitter.com/autarc" target="_blank">Twitter</a> or ask me directly.
							</p>
						</div>
					</li>

				</ul>
			</div>
		)
	}
}
