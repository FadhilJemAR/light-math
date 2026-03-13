/* ==========================================================================
   1. GEOMETRY & TRIGONOMETRY UTILS
   ========================================================================== */

/**
 * Simplifies a square root expression as a combined term if possible.
 * Example: 8 -> "2√2", 9 -> "3".
 * @param {number} n - Value to simplify under square root.
 * @returns {string} Simplified form.
 */
const simplifyRoot = (n) => {
  const root = Math.sqrt(n);
  if (Number.isInteger(root)) return root.toString();

  let exterior = 1;
  let interior = n;

  for (let i = 2; i * i <= interior; i++) {
    // Diganti ke 'while' agar faktor kuadrat yang sama bisa habis dibagi
    while (interior % (i * i) === 0) {
      exterior *= i;
      interior /= i * i;
    }
  }

  if (exterior === 1) return `√${interior}`;
  if (interior === 1) return `${exterior}`;
  return `${exterior}√${interior}`;
};

/**
 * Calculates the hypotenuse of a right-angled triangle.
 * @param {number} a - Side a
 * @param {number} b - Side b
 * @param {Object} [options] - { isSymbolic: boolean }
 * @returns {number|string} Hypotenuse as number or simplified radical string.
 */
export const getHypotenuse = (a, b, options) => { 
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Invalid input: Side A and Side B type must be numbers.");
  }
  if (options && options.isSymbolic) {
     const sumOfSquares = Math.pow(a, 2) + Math.pow(b, 2);
     return simplifyRoot(sumOfSquares);
  }
  return Math.hypot(a, b);
};

/**
 * Converts degrees to radians.
 * @param {number} degrees - Angle in degrees.
 * @returns {number} Angle in radians.
 */
export const toRadians = (degrees) => degrees * (Math.PI / 180);

/**
 * Calculates slope of line through two points.
 * @param {number} x1 - x coordinate of point 1.
 * @param {number} y1 - y coordinate of point 1.
 * @param {number} x2 - x coordinate of point 2.
 * @param {number} y2 - y coordinate of point 2.
 * @returns {number} Slope or Infinity when vertical.
 */
export const getSlope = (x1, y1, x2, y2) => {
  if (x2 - x1 === 0) return Infinity; 
  return (y2 - y1) / (x2 - x1);
};

/**
 * Calculates midpoint between two points.
 * @param {number} x1 - x coordinate of point 1.
 * @param {number} y1 - y coordinate of point 1.
 * @param {number} x2 - x coordinate of point 2.
 * @param {number} y2 - y coordinate of point 2.
 * @returns {{x: number, y: number}} Midpoint coordinates.
 */
export const getMidpoint = (x1, y1, x2, y2) => ({
  x: (x1 + x2) / 2,
  y: (y1 + y2) / 2
});

/**
 * Calculates area for supported 2D shapes.
 * @param {string} shape - 'circle', 'triangle', 'square', or 'rect'.
 * @param {...number} args - Required parameters per shape.
 * @returns {number} Area.
 * @throws {Error} if shape not supported.
 */
export const getArea = (shape, ...args) => {
  switch (shape.toLowerCase()) {
    case 'circle': return Math.PI * Math.pow(args[0], 2);
    case 'triangle': return 0.5 * args[0] * args[1];
    case 'square': return Math.pow(args[0], 2);
    case 'rect': return args[0] * args[1];
    default: throw new Error("Shape not supported!");
  }
};

/**
 * Calculates volume for supported 3D shapes.
 * @param {string} shape - 'sphere', 'pyramid', 'cube', or 'prism'.
 * @param {...number} args - Required parameters per shape.
 * @returns {number} Volume.
 * @throws {Error} if shape not supported.
 */
export const getVolume = (shape, ...args) => {
  switch (shape.toLowerCase()) {
    case 'sphere': return (4/3) * Math.PI * Math.pow(args[0], 3);
    case 'pyramid': return (1/3) * args[0] * args[1]; 
    case 'cube': return Math.pow(args[0], 3);
    case 'prism': return args[0] * args[1] * args[2];
    default: throw new Error("3D Shape not supported!");
  }
};


/* ==========================================================================
   2. STATISTICS & DATA ANALYSIS
   ========================================================================== */

/**
 * Calculates arithmetic mean.
 * @param {number[]} numbers - Non-empty array.
 * @returns {number} Mean.
 */
export const getMean = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
};

/**
 * Calculates median.
 * @param {number[]} numbers - Non-empty array.
 * @returns {number} Median.
 */
export const getMedian = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};

/**
 * Calculates mode(s).
 * @param {number[]} data - Array of numbers.
 * @returns {number[]} Array of mode values, or [] when all values appear once.
 */
export const getMode = (data) => {
  const frequency = {};
  data.forEach(value => frequency[value] = (frequency[value] || 0) + 1);
  let maxFreq = 0, modes = [];
  for (const key in frequency) {
    if (frequency[key] > maxFreq) {
      maxFreq = frequency[key];
      modes = [Number(key)];
    } else if (frequency[key] === maxFreq) {
      modes.push(Number(key));
    }
  }
  return modes.length === Object.keys(frequency).length ? [] : modes;
};

/**
 * Calculates quartiles Q1, Q2, Q3 using interpolation.
 * @param {number[]} data - Non-empty array.
 * @returns {{q1:number,q2:number,q3:number}} Quartile object.
 */
export const getQuartiles = (data) => {
  if (!Array.isArray(data) || data.length === 0) throw new Error("Input must be array.");
  const sorted = [...data].sort((a, b) => a - b);
  const n = sorted.length;

  const getValue = (p) => {
    if (p < 0 || p > 1) throw new Error("Percentile must be between 0 and 1.");
    const pos = (n + 1) * p;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (base <= 0) return sorted[0];
    if (base >= n) return sorted[n - 1];

    return sorted[base - 1] + rest * (sorted[base] - sorted[base - 1]);
  };
  return { q1: getValue(0.25), q2: getValue(0.50), q3: getValue(0.75) };
};


/* ==========================================================================
   3. NUMBER THEORY & ARITHMETIC
   ========================================================================== */

/**
 * Calculates factorial recursively.
 * @param {number} n - Non-negative integer.
 * @returns {number} n!.
 */
export const getFactorial = (n) => {
  if (n < 0) throw new Error("Factorial not defined for negative numbers.");
  return n === 0 ? 1 : n * getFactorial(n - 1);
};

/**
 * Determines if n is prime.
 * @param {number} n - Number to test.
 * @returns {boolean} True when prime.
 */
export const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
};

/**
 * Computes greatest common divisor (Euclidean algorithm).
 * @param {number} a
 * @param {number} b
 * @returns {number} GCD.
 */
export const getGCD = (a, b) => {
  a = Math.abs(a); b = Math.abs(b);
  return !b ? a : getGCD(b, a % b);
};

/**
 * Computes least common multiple.
 * @param {number} a
 * @param {number} b
 * @returns {number} LCM.
 */
export const getLCM = (a, b) => (a === 0 || b === 0) ? 0 : Math.abs(a * b) / getGCD(a, b);

/**
 * Checks if number is even.
 * @param {number} num
 * @returns {boolean}
 */
export const isEven = (num) => num % 2 === 0;

/**
 * Checks if number is odd.
 * @param {number} num
 * @returns {boolean}
 */
export const isOdd = (num) => num % 2 !== 0;

/* ==========================================================================
   4. Algebra
   ========================================================================== */

/**
 * Placeholder for quadratic equation root finding.
 * @param {string} equation - Quadratic equation e.g. 'ax^2 + bx + c = 0'.
 * @param {number} knownValue - Known value for solving additional constraints.
 */
export const findQuadraticEquationRoots = (equation, knownValue) => {
   console.log(equation, knownValue);
};