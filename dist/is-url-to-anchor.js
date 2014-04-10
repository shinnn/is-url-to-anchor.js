/*!
 * is-url-to-anchor.js | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-url-to-anchor.js
*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.isUrlToAnchor = factory();
  }
}(this, function() {

'use strict';

var tmpAnchorElm = document.createElement('a');

function isUrlToAnchor(url) {var opts = arguments[1];if(opts === void 0)opts = {samePage: true, emptyId: true};
  if (typeof url !== 'string') {
    return false;
  }
  
  var hashIndex = url.indexOf('#');
  
  if (hashIndex === -1) {
    // the URL has no hash
    return false;
  } else if (!opts.emptyId && hashIndex === url.length - 1) {
    return false;
  } else {
    if (!opts.samePage) {
      return true;
    }
    // the URL starts with "#"
    if (hashIndex === 0) {
      return true;
    }
  }
  
  tmpAnchorElm.href = url;
  url = tmpAnchorElm.href;
  
  return url.split('#')[0] === location.href.split('#')[0];
}

return isUrlToAnchor;

}));
