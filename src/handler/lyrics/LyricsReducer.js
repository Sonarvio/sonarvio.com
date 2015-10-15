/**
 * Lyrics: Reducer
 * ===============
 *
 *
 */

import { SET_RESULTS } from '../types'
import { INITIAL_STATE, setResults } from './LyricsActions'


export default function panel (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_RESULTS:
			return setResults(state, action.results)
	}
	return state
}
