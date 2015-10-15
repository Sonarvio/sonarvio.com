/**
 * Main
 * ====
 *
 *
 */

import './utilities/adapter'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { ReduxRouter, reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'

import reducers from './handler/reducers'
import Routes from './components/Routes.jsx'

const wrapper = document.getElementById('root')
const routes = Routes({/** options **/})

// import { devTools, persistState } from 'redux-devtools'
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

const store = compose(
  // applyMiddleware(...),
  reduxReactRouter({ createHistory }),
  // development
  // devTools(),
  // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(reducers)

ReactDOM.render((
  <div>
    <Provider store={store}>
      <ReduxRouter>{routes}</ReduxRouter>
    </Provider>
    {/**<DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
    **/}
  </div>
), wrapper)

wrapper.classList.remove('preload')
