/**
 * App
 * ===
 *
 *
 */

import React, { Component, PropTypes } from 'react'

import Info from './containers/Info/Info'

import './App.styl'


/**
 * 
 */
export default class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App__Main">
          {this.props.children}
        </div>
        <div className="App__Info">
          <Info/>
        </div>
      </div>
    )
  }
}
