# Triangle, but which triangle?

Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

We are looking for solutions that showcase problem solving skills and structural considerations that can be applied to larger and potentially more complex problem domains. Pay special attention to tests, readability of code and error cases.

The way you reflect upon your decisions is important to us, why we ask you to include a brief discussion of your design decisions and implementation choices.

## Usage

### Install

    yarn

### Test

    yarn test

### Lint

    yarn lint

## Design and implementation choices

- I want my code as simple as possible, and only use NPM modules if they provide functionality that I can not just copy from Stack Overflow.
- I aim at using functional programming or promises.
- I chose to write `isNotInteger` as a method where it returns `true` if the parameter is not an integer in order to not have to use `=== false` in the `if` statement in `triangleType`.
- I am using `TriangleClasses` as an array, which is also exported, so I will not need to make sure I spell equilateral, isosceles and scalene correct throughout my code.
- I explicitly look for `=== undefined` rather than using `!` in front of a function. I believe it is more readable and type-safe.
- I chose to run all the test functions (`isEquilateral`, `isIsosceles`, `isScalene`) simultaneously as their work is not too rough on the CPU, I assume.  I could have chosen to do a while and look for the first function that returned true if we needed heavier work.
- For proper testing I should also export the test functions, so they can be tested individually.
