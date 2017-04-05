'use strict';

const urls = require('./urls');

module.exports = function () {
  const url = urls[Math.floor(Math.random()*urls.length)];

  return url;
};
