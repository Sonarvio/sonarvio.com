/**
 * Panel: Reducer
 * ==============
 *
 *
 */

import { CHANGE_SIZE } from '../types'
import { INITIAL_STATE, changeSize } from './PanelActions'


export default function panel (state = INITIAL_STATE, action) {
	switch (action.type) {
		case CHANGE_SIZE:
			return changeSize(state, action.size)
			// specify subtree for updates
			// return state.update('panel', (panelState) => {
			// 	return changeSize(state, action.size)
			// })
	}
	return state
}
