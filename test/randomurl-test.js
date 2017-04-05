'use strict';
const randomurl = require('../lib/randomurl');
const assert = require('assert');

describe('Random URL', function() {
  it('Returns a random url', function() {
    assert.ok(randomurl().length > 0);
  });
});
