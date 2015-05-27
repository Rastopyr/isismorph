/* global module */

/**
 * Expose isismorph
 */

(function( global, factory ) {

  if ( typeof module === "object" && typeof module.exports === "object" ) {
    module.exports = factory( {} );
  } else {
    factory( global );
  }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function (context) {

  function isBrowser () {
    return typeof window !== 'undefined';
  }

  function isNode () {
    return typeof window === 'undefined' && typeof process !== 'undefined';
  }

  function isWebWorker () {
    return typeof self !== 'undefined' && typeof postMessage === 'function';
  }

  context.isBrowser = isBrowser;
  context.isNode = isNode;
  context.isWebWorker = isWebWorker;

  return context;
}));
