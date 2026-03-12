/* ==========================================================================
   1. GEOMETRY & TRIGONOMETRY UTILS
   ========================================================================== */

const simplifyRoot = (n) => {
  const root = Math.sqrt(n);
  if (Number.isInteger(root)) return root.toString();

  let exterior = 1;
  let interior = n;

  for (let i = 2; i * i <= interior; i++) {
    while (interior % (i * i) === 0) {
      exterior *= i;
      interior /= i * i;
    }
  }

  if (exterior === 1) return `√${interior}`;
  if (interior === 1) return `${exterior}`;
  return `${exterior}√${interior}`;
};

const getHypotenuse = (a, b, options) => { 
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Invalid input: Side A and Side B type must be numbers.");
  }
  if (options && options.isSymbolic) {
     const sumOfSquares = Math.pow(a, 2) + Math.pow(b, 2);
     return simplifyRoot(sumOfSquares);
  }
  return Math.hypot(a, b);
};

const toRadians = (degrees) => degrees * (Math.PI / 180);

const getSlope = (x1, y1, x2, y2) => {
  if (x2 - x1 === 0) return Infinity; 
  return (y2 - y1) / (x2 - x1);
};

const getMidpoint = (x1, y1, x2, y2) => ({
  x: (x1 + x2) / 2,
  y: (y1 + y2) / 2
});

const getArea = (shape, ...args) => {
  switch (shape.toLowerCase()) {
    case 'circle': return Math.PI * Math.pow(args[0], 2);
    case 'triangle': return 0.5 * args[0] * args[1];
    case 'square': return Math.pow(args[0], 2);
    case 'rect': return args[0] * args[1];
    default: throw new Error("Shape not supported!");
  }
};

const getVolume = (shape, ...args) => {
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

const getMean = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
};

const getMedian = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};

const getMode = (data) => {
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

const getQuartiles = (data) => {
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

const getFactorial = (n) => {
  if (n < 0) throw new Error("Factorial not defined for negative numbers.");
  return n === 0 ? 1 : n * getFactorial(n - 1);
};

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
};

const getGCD = (a, b) => {
  a = Math.abs(a); b = Math.abs(b);
  return !b ? a : getGCD(b, a % b);
};

const getLCM = (a, b) => (a === 0 || b === 0) ? 0 : Math.abs(a * b) / getGCD(a, b);

const isEven = (num) => num % 2 === 0;

const isOdd = (num) => num % 2 !== 0;

/* ==========================================================================
   COMMONJS EXPORT
   ========================================================================== */

module.exports = {
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
  isOdd
};