'use strict';

const randomurl = require('../lib/randomurl');

const requestSomething = async (request) => {
  const url = randomurl();
  await request(url);
};

module.exports = (request, runContinuously) => {
  requestSomething(request);
  if (runContinuously) {
    setInterval(() => {
      requestSomething(request);
    }, 10000);
  }
};
