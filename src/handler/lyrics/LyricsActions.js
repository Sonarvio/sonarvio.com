/**
 * Lyrics: Actions
 * ===============
 *
 *
 */

import { Map, fromJS } from 'immutable'


export const INITIAL_STATE = Map()

export function setResults (state, results) {
	return state.update('results', () => results)
}
