/**
 * Routes
 * ======
 *
 *
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App.jsx'
import Containers from './containers/Containers.jsx'


export default ({/** options **/}) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Containers}/>
      {/**
        TODO:
        allow optiona '.html' extension
      **/}
      <Route path=":page" component={Containers}/>
    </Route>
  )
}
