import { getHypotenuse } from '../index.js';

console.log("--- Testing Light Math ---");

// Test 1: Angka Biasa
console.log("Test 1 (3, 4):", getHypotenuse(3, 4)); 
// Output: 5

// Test 2: Hasil Simbolik (Akar)
console.log("Test 2 (2, 2, symbolic):", getHypotenuse(2, 2, { isSymbolic: true })); 
// Output: 2√2

// Test 3: Angka yang tidak bisa disederhanakan
console.log("Test 3 (1, 2, symbolic):", getHypotenuse(1, 2, { isSymbolic: true })); 
// Output: √5

// Test 4 : Angka yang tidak bisa disederhanakan
console.log("Test 4 (6, 2, symbolic):", getHypotenuse(6, 2, { isSymbolic: true })); 
// Output: √53

// Test 5 : Angka yang tidak bisa disederhanakan
console.log("Test 5 (4, 6, symbolic):", getHypotenuse(4, 6, { isSymbolic: true })); 
// Output: 2√13
