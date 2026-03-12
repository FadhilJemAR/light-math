# light-math 📐

A lightweight, fast, and versatile mathematical utility library for JavaScript and Node.js. Whether you're working on a React frontend or a Node.js backend, **light-math** provides essential tools for geometry, statistics, and number theory with zero dependencies.

## 🚀 Key Features

- **Hybrid Support**: Works with ES Modules (ESM) and CommonJS (CJS).
- **Symbolic Math**: Unique feature to return square roots in symbolic form (e.g., `2√2`).
- **Comprehensive**: 15+ functions covering Geometry, Statistics, and Number Theory.
- **Developer Friendly**: Full JSDoc support for great Autocomplete in VS Code.

## 📦 Installation

```bash
npm install light-math
```

## 🔨 Usage

```javascript
import {isPrime,getFactorial,getHypotenuse} from 'light-math';

console.log(isPrime(5)); //return true because 5 is prime number
console.log(isPrime(9)); // return false because 9 is not prime number  

console.log(getFactorial(5)); // return 120 

console.log(getHypotenuse(3,4)); // return 5 
console.log(getHypotenuse(6,2)); // return 6.3245.....
console.log(getHypotenuse(6,2,{isSymbolic:true})); //return 2√10

//see API Reference for other API docs
```

## 📚 API Reference

#### 🔢 Number Theory & Arithmetic

| API          | Description                                                                  | Params                          |
| ------------ | ---------------------------------------------------------------------------- | ------------------------------- |
| getFactorial | Calculates the factorial of a number (n!).                                   | `n`: number                      |
| isPrime      | Checks if a number is prime (true/false).                                   | `n`: number                      |
| getGCD       | Calculates greatest common divisor (GCD).                                   | `a`: number, `b`: number          |
| getLCM       | Calculates least common multiple (LCM).                                     | `a`: number, `b`: number          |
| isEven       | Checks if a number is even.                                                  | `num`: number                    |
| isOdd        | Checks if a number is odd.                                                   | `num`: number                    |



#### 📐 Geometry & Trigonometry
| API           | Deskripsi                                                         | Params                                                  |
| ------------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| getHypotenuse | Calculates the hypotenuse of a triangle. Supports symbolic results (roots). | `a`: number, `b`: number, `options?`: {isSymbolic: boolean} |
| getArea       | Calculating the area of ​​flat shapes such as circle, triangle, square, and rectangle.    | `shape`: string, `...args`: number[]                     |
| getVolume     | Calculating the volume of sphere, pyramid, cube, prism geometric shapes.   | `shape`: string, `...args`: number[]                      |
| getSlope      | Calculating the slope of a line (gradient).               | `x1`, `y1`, `x2`,` y2`: number                               |
| getMidpoint   | Find the midpoint between two coordinates.          | `x1`,` y1`, `x2`, `y2`: number                               |
| toRadians     | Convert degrees to radians.           | `degrees`: number                                 |

#### 📊Statistics

| API | Deskripsi | Params |
|-----|-----------|--------|
| getMean     |  get mean from number of arrays          |  `numbers`:number[]      |
| getMedian    | get median from number of arrays          |  `numbers`:number[]      |
| getMode    |  get mode from number of arrays         |   `numbers`:[]     |
| getQuartiles   |  get quartiles from number of arrays         |   `numbers`:[]     |


## 🤝Contribute

Want to conribute? lets fork the repository! [Github Repo](http://), you can add new API, fixing bugs or false logic


**Lisensi**: MIT License  
(c) FadhilJmimy