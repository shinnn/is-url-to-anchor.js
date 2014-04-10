'use strict';

var tmpAnchorElm = document.createElement('a');

function isUrlToAnchor(url, opts = {samePage: true, emptyId: true}) {
  if (typeof url !== 'string') {
    return false;
  }
  
  let hashIndex = url.indexOf('#');
  
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
