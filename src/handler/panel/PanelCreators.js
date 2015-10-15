/**
 * Panel: Creators
 * ===============
 *
 *
 */

import { CHANGE_SIZE } from '../types'

export function changeSize (size) {
	return { type: CHANGE_SIZE, size }
}
