/**
 * Lyrics: Actions
 * ===============
 *
 *
 */

import { Map, fromJS } from 'immutable'


export const INITIAL_STATE = Map()

export function setResults (state, results) { // typeof array
	return state.update('results', () => results)
}
