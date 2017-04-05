'use strict';
const run = require('../src/run');
const assert = require('assert');

describe('Run Cry Baby', function() {
  it('It calls request with a url', function() {
    const MockRequest = (url) => {
      assert.ok(url.length > 0);
    };
    run(MockRequest, false);
  });
});
