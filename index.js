/* ==========================================================================
   1. GEOMETRY & TRIGONOMETRY UTILS
   Fungsi terkait perhitungan jarak, sudut, dan bentuk bidang datar/ruang.
   ========================================================================== */

/**
 * Helper to simplify square roots
 * Example: 8 -> "2√2", 9 -> "3"
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



export const toRadians = (degrees) => degrees * (Math.PI / 180);



export const getSlope = (x1, y1, x2, y2) => {
  if (x2 - x1 === 0) return Infinity; 
  return (y2 - y1) / (x2 - x1);
};

export const getMidpoint = (x1, y1, x2, y2) => ({
  x: (x1 + x2) / 2,
  y: (y1 + y2) / 2
});

/**
 * Calculates area for 2D shapes (circle, triangle, square, rect).
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
 * Calculates volume for 3D shapes (sphere, pyramid, cube, prism).
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
   Fungsi untuk mengolah kumpulan data (array).
   ========================================================================== */

export const getMean = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
};

export const getMedian = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};

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

export const getQuartiles = (data) => {
  if (!Array.isArray(data) || data.length === 0) throw new Error("Input must be array.");
  const sorted = [...data].sort((a, b) => a - b);
  const getValue = (p) => {
    const pos = (sorted.length - 1) * p;
    const base = Math.floor(pos);
    const rest = pos - base;
    return sorted[base + 1] !== undefined 
      ? sorted[base] + rest * (sorted[base + 1] - sorted[base]) 
      : sorted[base];
  };
  return { q1: getValue(0.25), q2: getValue(0.50), q3: getValue(0.75) };
};


/* ==========================================================================
   3. NUMBER THEORY & ARITHMETIC
   Fungsi terkait sifat angka, faktorial, dan pembagi.
   ========================================================================== */

export const getFactorial = (n) => {
  if (n < 0) throw new Error("Factorial not defined for negative numbers.");
  return n === 0 ? 1 : n * getFactorial(n - 1);
};

export const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
};

export const getGCD = (a, b) => {
  a = Math.abs(a); b = Math.abs(b);
  return !b ? a : getGCD(b, a % b);
};

export const getLCM = (a, b) => (a === 0 || b === 0) ? 0 : Math.abs(a * b) / getGCD(a, b);

export const isEven = (num) => num % 2 === 0;

export const isOdd = (num) => num % 2 !== 0;