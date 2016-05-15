"use strict";

var chai = require('chai'),
  expect = chai.expect,
  should = chai.should();


require('co-mocha');

var genomatic = require('../');


var test = module.exports = {};


test['bind'] = {
  'normal function': function*() {
    let fn = genomatic.bind(function(a, b) {
      return a + b + this;
    }, 4);

    expect(fn(5,3)).to.eql(12);
  },
  'generator function': function*() {
    let fn = genomatic.bind(function*(a, b) {
      return a + b + this;
    }, 4);

    expect(yield fn(5,4)).to.eql(13);
  },
};


test['isGenFn'] = {
  'normal function': function*() {
    let fn = function() {};

    genomatic.isGenFn(fn).should.be.false;
  },
  'generator function': function*() {
    let fn = function*() {};

    genomatic.isGenFn(fn).should.be.true;
  },
  'generator object': function*() {
    let fn = (function*() {})();

    genomatic.isGenFn(fn).should.be.false;
  },
};



