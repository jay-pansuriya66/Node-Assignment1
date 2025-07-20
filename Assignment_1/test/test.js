const matrixCalc = require('@jay-pansuriya/matrix.js')


const matrixA = [
  [1, 2],
  [3, 4]
];

const matrixB = [
  [5, 6],
  [7, 8]
];

const matrixC = [
  [1, 2, 3],
  [4, 5, 6]
];

const matrixD = [
  [7, 8],
  [9, 10],
  [11, 12]
];

const matrixE = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const invalidMatrixEmpty = [];
const invalidMatrixJagged = [
  [1, 2],
  [3]
];
const invalidMatrixNonNumber = [
  [1, 2],
  [3, 'four']
];


console.log("--- Original Matrices ---");
console.log("Matrix A (2x2):\n", matrixA);
console.log("Matrix B (2x2):\n", matrixB);
console.log("Matrix C (2x3):\n", matrixC);
console.log("Matrix D (3x2):\n", matrixD);
console.log("Matrix E (3x3):\n", matrixE);
console.log("\n");


console.log("--- Testing Addition ---");
const sumAB = matrixCalc.add(matrixA, matrixB);
if (sumAB) {
  console.log("Matrix A + Matrix B:\n", sumAB); 
} else {
  console.log("Addition (A + B) failed.");
}

const sumAC = matrixCalc.add(matrixA, matrixC);
if (sumAC) {
  console.log("Matrix A + Matrix C:\n", sumAC);
} else {
  console.log("Addition (A + C) failed as expected (dimension mismatch).");
}
console.log("\n");

console.log("--- Testing Subtraction ---");
const diffAB = matrixCalc.subtract(matrixA, matrixB);
if (diffAB) {
  console.log("Matrix A - Matrix B:\n", diffAB);
  console.log("Subtraction (A - B) failed.");
}

const diffCA = matrixCalc.subtract(matrixC, matrixA); 
if (diffCA) {
  console.log("Matrix C - Matrix A:\n", diffCA);
} else {
  console.log("Subtraction (C - A) failed as expected (dimension mismatch).");
}
console.log("\n");


console.log("--- Testing Multiplication ---");
const prodAB = matrixCalc.multiply(matrixA, matrixB);
if (prodAB) {
  console.log("Matrix A * Matrix B:\n", prodAB); 
} else {
  console.log("Multiplication (A * B) failed.");
}

const prodCD = matrixCalc.multiply(matrixC, matrixD);
if (prodCD) {
  console.log("Matrix C (2x3) * Matrix D (3x2):\n", prodCD); 
} else {
  console.log("Multiplication (C * D) failed.");
}

const prodDA = matrixCalc.multiply(matrixD, matrixA); 
if (prodDA) {
  console.log("Matrix D (3x2) * Matrix A (2x2):\n", prodDA);
} else {
  console.log("Multiplication (D * A) failed.");
}

const prodAC = matrixCalc.multiply(matrixA, matrixC);
if (prodAC) {
  console.log("Matrix A (2x2) * Matrix C (2x3):\n", prodAC);
} else {
  console.log("Multiplication (A * C) failed.");
}

const prodBC = matrixCalc.multiply(matrixB, matrixC); 
if (prodBC) {
  console.log("Matrix B (2x2) * Matrix C (2x3):\n", prodBC);
} else {
  console.log("Multiplication (B * C) failed.");
}
console.log("\n");

console.log("--- Testing Transpose ---");
const transposedA = matrixCalc.transpose(matrixA);
if (transposedA) {
  console.log("Transpose of Matrix A:\n", transposedA); 
} else {
  console.log("Transpose of A failed.");
}

const transposedE = matrixCalc.transpose(matrixE);
if (transposedE) {
  console.log("Transpose of Matrix E:\n", transposedE); 
} else {
  console.log("Transpose of E failed.");
}
console.log("\n");


console.log("--- Testing isValidMatrix (Error Handling) ---");
console.log("Testing empty matrix:");
matrixCalc.add(invalidMatrixEmpty, matrixA); 

console.log("\nTesting jagged matrix:");
matrixCalc.add(invalidMatrixJagged, matrixA);

console.log("\nTesting matrix with non-number element:");
matrixCalc.add(invalidMatrixNonNumber, matrixA);