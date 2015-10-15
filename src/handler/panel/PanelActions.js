/**
 * Panel: Actions
 * ==============
 *
 *
 */

import { Map, fromJS } from 'immutable'


export const INITIAL_STATE = Map()

export function changeSize (state, size) {
	return state.updateIn(['size'], 0, (prev) => size)
}
