/**
 * Reducer
 * =======
 *
 *
 */

import { INITIAL_STATE, changeSize } from './core'

// main reducercomposed of lower-level reducer functions
// reducer composition: http://rackt.github.io/redux/docs/basics/Reducers.html
export default function reducer (state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'CHANGE_SIZE':
			// specify subtree for updates
			return state.update('panel', (panelState) => {
				return changeSize(state, action.size)
			})
	}
	return state
}

//
//
// function setState(state, newState) {
//   return state.merge(newState);
// }
//
// export default function(state = Map(), action) {
//   switch (action.type) {
//   case 'SET_STATE':
//     return setState(state, action.state);
//   }
//   return state;
// }
