/**
 * Info - FAQ
 * ==========
 */

import React, { Component, PropTypes } from 'react'

import ExtensionYoutube from './Extension-Youtube.png'

import './FAQ.styl'


/**
 *
 */
export default class FAQ extends Component {

	render(){
		return (
			<div className="FAQ">
				<h3 className="FAQ__Title">Frequently Asked Questions (FAQ)</h3>
				<ul className="FAQ__List">

					<li className="FAQ__Entry">
						<h6 className="FAQ__Question">
							<a className="FAQ__Anchor" href="#faq-01" id="faq-01">#</a>
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

					<li className="FAQ__Entry">
						<h6 className="FAQ__Question">
							<a className="FAQ__Anchor" href="#faq-02" id="faq-02">#</a>
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

					<li className="FAQ__Entry">
						<h6 className="FAQ__Question">
							<a className="FAQ__Anchor" href="#faq-03" id="faq-03">#</a>
							Whats the case with the browser extension ? It doesn't seem to work. How should it be used ?
						</h6>
						<div className="FAQ__Answer">
							<p>
								Sorry for the spare documentation at the time. Currently the system is a prototype
								to gather feedback for a real application later next year. Therefore the extensions
								aren't signed and available at the markets yet. They need to be installed manually in
								developer mode by dragging the respective files into their browser window.
								After the successfull installation you should	be able to access the interface at
								videos on the different websites (e.g. <a href={ExtensionYoutube} target="_blank">Youtube</a>).
								Depending on the playtime it can take up a few minutes until the inital buffer is loaded.
							</p>
						</div>
					</li>

					<li className="FAQ__Entry">
						<h6 className="FAQ__Question">
							<a className="FAQ__Anchor" href="#faq-04" id="faq-04">#</a>
							I just found <a href="https://www.gitbook.com/book/autarc/sonarvio" target="_blank">this Gitbook</a> with the same title as the project.
							Whats the relation between these two ?
						</h6>
						<div className="FAQ__Answer">
							<p>
								It was an attempt to keep track of the progress during the development by writing a documentation with different chapters.
								Unfortunately at the release phase I've got a synchronization problem with the online/offline version in their Editors,
								which caused a loss of data. The current online version are its remnants with some added notes.
							</p>
						</div>
					</li>

					<li className="FAQ__Entry">
						<h6 className="FAQ__Question">
							<a className="FAQ__Anchor" href="#faq-05" id="faq-05">#</a>
							Would you consider <a href="https://en.wikipedia.org/wiki/Query_by_humming" target="_blank">Query by humming</a> as retrieval option in the future ?
						</h6>
						<div className="FAQ__Answer">
							<p>
								Although a specific 'record' option is planned for an upcoming release, the system is still mainly build
								around the idea of using the underlying binary data files. This approach allows the usage in speaker free
								environments like public places or work. The suggestions is not completely disregarded, but definitely not
								worked in the near future.
							</p>
						</div>
					</li>

					<li className="FAQ__Entry">
						<h6 className="FAQ__Question">
							<a className="FAQ__Anchor" href="#faq-last" id="faq-last">#</a>
							You still didn't said why...
						</h6>
						<div className="FAQ__Answer">
							<p>
								Don't worry - I had probably the same issue as well and missed to talk about the aspect accidentally. <br/>
								Just drop me a message via <a href="https://github.com/Autarc" target="_blank">Github</a> / <a href="https://twitter.com/autarc" target="_blank">Twitter</a> or ask me directly.
							</p>
						</div>
					</li>

				</ul>
			</div>
		)
	}
}
