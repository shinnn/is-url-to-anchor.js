# is-url-to-anchor.js

[![Bower version](https://badge.fury.io/bo/is-url-to-anchor.svg)](http://badge.fury.io/bo/is-url-to-anchor)
[![NPM version](https://badge.fury.io/js/is-url-to-anchor.svg)](http://badge.fury.io/js/is-url-to-anchor)
[![Build Status](https://travis-ci.org/shinnn/is-url-to-anchor.js.svg?branch=master)](https://travis-ci.org/shinnn/is-url-to-anchor.js)
[![devDependency Status](https://david-dm.org/shinnn/is-url-to-anchor.js/dev-status.svg)](https://david-dm.org/shinnn/is-url-to-anchor.js#info=devDependencies)

[![browser support](https://ci.testling.com/shinnn/is-url-to-anchor.js.png)](https://ci.testling.com/shinnn/is-url-to-anchor.js)

A client-side library to check if the URL indicates an anchor of the document

```javascript
// On http://yoursite.com/foo/bar

isUrlToAnchor('#buz'); //=> true
isUrlToAnchor('/foo/bar#buz'); //=> true
isUrlToAnchor('bar#buz'); //=> true
isUrlToAnchor('http://yoursite.com/foo/bar#buz'); //=> true
```

## Installation

### Install with package manager

#### [Bower](http://bower.io/)

```
bower i --save is-url-to-anchor
```

#### [Component](http://component.io/)

```
component install shinnn/is-url-to-anchor.js
```

#### [npm](https://www.npmjs.org/) (Use with [Browserify](http://browserify.org/) etc.)

```
npm i --save is-url-to-anchor
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/is-url-to-anchor.js/master/dist/is-url-to-anchor.js "view raw")

## API

### isUrlToAnchor(url[, options])

Return: `Boolean`

Check if the `String` of the `url` argument indicates an [anchored element](http://www.w3.org/TR/html401/struct/links.html#anchors-with-id) of the document (that is, the string contains a hash`#` character).

By default, the `samePage` option and the `emptyId` option are both enabled. You can disable them by passing an `Object` to the `options` argument.

#### options.samePage

Type: `Boolean` Default: `true`

Validate the URL indicates an anchor of the *same* document.

```javascript
// On http://yoursite.com/foo

isUrlToAnchor('bar#buz'); //=> false
isUrlToAnchor('bar#buz', {samePage: false}); //=> true
```

#### options.emptyId

Type: `Boolean` Default: `true`

Allow the URL to have no characters after hash character.

```javascript
isUrlToAnchor('#'); //=> true
isUrlToAnchor('#', {emptyId: false}); //=> false
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
