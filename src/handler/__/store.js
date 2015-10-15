/**
 * Store
 * =====
 *
 * "... stores the state of your application over time."
 */

import { createStore } from 'redux'

import reducer from './reducer'


export default function makeState(){
	return createStore(reducer)
}
