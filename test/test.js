import {
  getHypotenuse,
  toRadians,
  getSlope,
  getMidpoint,
  getArea,
  getVolume,
  getMean,
  getMedian,
  getMode,
  getQuartiles,
  getFactorial,
  isPrime,
  getGCD,
  getLCM,
  isEven,
  isOdd,
  findQuadraticEquationRoots,
} from '../index.js';

console.log('--- Testing Light Math ---');

console.log('getHypotenuse(3,4) =', getHypotenuse(3, 4)); // 5
console.log('getHypotenuse(2,2,{isSymbolic:true}) =', getHypotenuse(2, 2, { isSymbolic: true })); // 2√2
console.log('getHypotenuse(1,2,{isSymbolic:true}) =', getHypotenuse(1, 2, { isSymbolic: true })); // √5

console.log('toRadians(180) =', toRadians(180)); // π

console.log('getSlope(0,0,4,4) =', getSlope(0, 0, 4, 4)); // 1
console.log('getSlope(0,0,0,5) =', getSlope(0, 0, 0, 5)); // Infinity

console.log('getMidpoint(0,0,4,4) =', getMidpoint(0, 0, 4, 4)); // {x:2,y:2}

console.log('getArea(circle, 3) =', getArea('circle', 3)); // 28.27
console.log('getArea(triangle, 3, 4) =', getArea('triangle', 3, 4)); // 6
console.log('getArea(square, 4) =', getArea('square', 4)); // 16
console.log('getArea(rect, 2, 5) =', getArea('rect', 2, 5)); //10

console.log('getVolume(sphere, 3) =', getVolume('sphere', 3)); // 113.097...
console.log('getVolume(pyramid, 6, 4) =', getVolume('pyramid', 6, 4)); // 8
console.log('getVolume(cube, 3) =', getVolume('cube', 3)); // 27
console.log('getVolume(prism, 2, 3, 4) =', getVolume('prism', 2, 3, 4)); // 24

const sample = [1, 2, 2, 3, 4];
console.log('getMean([1,2,2,3,4]) =', getMean(sample)); // 2.4
console.log('getMedian([1,2,2,3,4]) =', getMedian(sample)); // 2
console.log('getMode([1,2,2,3,4]) =', getMode(sample)); // [2]
console.log('getQuartiles([1,2,2,3,4]) =', getQuartiles(sample)); // {q1:1.25,q2:2,q3:3.25}

console.log('getFactorial(5) =', getFactorial(5)); // 120
console.log('isPrime(2) =', isPrime(2)); // true
console.log('isPrime(9) =', isPrime(9)); // false

console.log('getGCD(8,12) =', getGCD(8, 12)); // 4
console.log('getLCM(8,12) =', getLCM(8, 12)); // 24

console.log('isEven(4) =', isEven(4)); // true
console.log('isOdd(5) =', isOdd(5)); // true


console.log('findQuadraticEquationRoots(1,-5,-14) =', findQuadraticEquationRoots(1,-5,-14)); 
