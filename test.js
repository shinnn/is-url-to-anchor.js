var test = require('tape');
var isUrlToAnchor = require('./dist/is-url-to-anchor.js');

test('isUrlToAnchor', function(t) {
  'use strict';

  t.plan(10);

  t.ok(isUrlToAnchor('#foo'), 'should validate simple hash and identifier.');
  t.ok(isUrlToAnchor('#'), 'should validate multiple hash is valid.');
  t.ok(isUrlToAnchor('##'), 'should validate two hash is valid.');
  t.ok(isUrlToAnchor(location.href + '#'), 'should validate current url and hash');
  t.ok(
    isUrlToAnchor(location.pathname + location.search + '#foo'),
    'should validate current pathname and hash and fragment.'
  );
  t.notOk(isUrlToAnchor({foo: 'bar'}), 'should validate argument type.');
  t.notOk(isUrlToAnchor(''), 'should validate empty string is invalid.');
  t.notOk(
    isUrlToAnchor(location.href.split('#')[0]),
    'should validate url without hash is invalid.'
  );
  
  t.test('with "currentPage" option false', function(st) {
    st.plan(1);
    st.ok(
      isUrlToAnchor('foo#bar', {samePage: false}),
      'should validate anchor on other page.'
    );
  });

  t.test('with "emptyId" option false', function(st) {
    st.plan(1);
    st.notOk(
      isUrlToAnchor('#', {emptyId: false}),
      'should validate empty identifier is invalid.'
    );
  });
});
