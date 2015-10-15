/**
 * Containers
 * ==========
 *
 *
 */

import React, { Component, PropTypes } from 'react'
import Fullscreen from 'react-fullscreen'

import Grid from '../templates/Grid/Grid.jsx'
import Record from './Record/Record.jsx'
import Lyrics from './Lyrics/Lyrics.jsx'
import Media from './Media/Media.jsx'
import File from './File/File.jsx'
import Website from './Website/Website.jsx'


/**
 * 
 */
export default class Containers extends Component  {

  render() {
    return (
      <Fullscreen>
        <Grid center={
          <Record active={this.isActive('record')}/>
        }>
          <Lyrics active={this.isActive('lyrics')}/>
          <Media active={this.isActive('media')}/>
          <File active={this.isActive('file')}/>
          <Website active={this.isActive('website')}/>
        </Grid>
      </Fullscreen>
    )
  }

  isActive (page) {
    return this.props.params.page === page
  }
}
