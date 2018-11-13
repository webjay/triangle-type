'use strict';

const TriangleClasses = ['Equilateral', 'Isosceles', 'Scalene'];

// it has all sides of equal length.
function isEquilateral(a, b, c) {
  return a === b && b === c;
}

// it has two sides of equal length.
function isIsosceles(a, b, c) {
  return (a === b || b === c || a === c) && isEquilateral(a, b, c) === false;
}

// it has three unequal sides.
function isScalene(a, b, c) {
  return a !== b && b !== c && a !== c;
}

function isNotInteger(n) {
  return Number.isInteger(n) === false;
}

function triangleType(a, b, c) {
  // make sure we only continue if we have integers to work with.
  if (isNotInteger(a) || isNotInteger(b) || isNotInteger(c)) throw new TypeError('Invalid parameters.');
  // run all tests simultaneously
  const results = [isEquilateral(a, b, c), isIsosceles(a, b, c), isScalene(a, b, c)];
  // find the test that returned true
  const classIndex = results.findIndex(result => result === true);
  // in case none of the tests returned true, give up
  if (classIndex === undefined) return;
  // return the triangle classification
  return TriangleClasses[classIndex];
}

module.exports = {
  triangleType,
  TriangleClasses
};
