/**
 * Reducers
 * ========
 *
 *
 */

import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

import panel from './panel/PanelReducer'
// import lyrics from './lyrics/LyricsReducer'


export default combineReducers({
	router: routerStateReducer,
	panel
	// lyrics
})
