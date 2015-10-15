/**
 * Adapter
 * ======
 *
 * Polyfills & Tweaks
 */

import 'babel/polyfill'

import 'isomorphic-fetch'

// polyfill for NodeList iteration
if (typeof NodeList !== 'undefined' && !NodeList.prototype[Symbol.iterator]) {
  NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]
}

if (!window.URL) {
  window.URL = window.webkitURL || window.msURL || window.oURL
}
