/**
 * Core
 * ====
 *
 * TODO:
 * - split in smaller/specific modules
 */

import { Map, fromJS } from 'immutable'

export const INITIAL_STATE = Map()

export function changeSize (state, size) {
	return state.updateIn(['size'], 0, (prev) => size)
}

// panel, size


// fromJSON
	// panel: Map({
	// 	// size: 0 // initial size
	// })


// export function next (state) {
// 	const entries = state.get('entries')
// 	return state.merge({
// 		vote: Map({
// 			pair: entries.take(2)
// 		}),
// 		entries: entries.skip(2)
// 	})
// }
//
//
// // allows to 'update' define value in there
// export function vote (state, entry) {
// 	return state.updateIn(['vote', 'tally', entry], 0, (tally) => tally + 1)
// }
//


// -> set size in here ..




 //
 //
 // // action
 // let changePanelSizeAction = {
 // 	type: 'CHANGE_PANEL_SIZE',
 // 	size: 4600
 // }
 //
 // return changePanelSize(state, changePanelSizeAction.size)
