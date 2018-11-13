'use strict';

const assert = require('assert');
const triangleType = require('../').triangleType;
const TriangleClasses = require('../').TriangleClasses;

describe('triangleType', function() {

  it('requires integers', function() {
    return assert.throws(() => triangleType('square'));
  });

  it('is equilateral (5, 5, 5) as it has all sides of equal length.', function() {
    return assert.strictEqual(triangleType(5, 5, 5), TriangleClasses[0]);
  });

  it('is isosceles (5, 5, 1) as it has two sides of equal length.', function() {
    return assert.strictEqual(triangleType(5, 5, 1), TriangleClasses[1]);
  });

  it('is isosceles (5, 1, 5) as it has two sides of equal length.', function() {
    return assert.strictEqual(triangleType(5, 1, 5), TriangleClasses[1]);
  });

  it('is scalene (10, 20, 30) as it has three unequal sides.', function() {
    return assert.strictEqual(triangleType(10, 20, 30), TriangleClasses[2]);
  });

});
