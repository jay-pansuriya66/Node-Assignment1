

function isValidMatrix(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    console.error("Error: Input is not an array or is empty.");
    return false;
  }
  const numCols = matrix[0].length;
  if (numCols === 0) {
    console.error("Error: Matrix rows cannot be empty.");
    return false;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== numCols) {
      console.error(`Error: Row ${i} has inconsistent length or is not an array.`);
      return false;
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (typeof matrix[i][j] !== 'number' || !Number.isFinite(matrix[i][j])) {
        console.error(`Error: Element at [${i}][${j}] is not a finite number.`);
        return false;
      }
    }
  }
  return true;
}

function add(matrixA, matrixB) {
  if (!isValidMatrix(matrixA) || !isValidMatrix(matrixB)) {
    return null;
  }

  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  if (rowsA !== rowsB || colsA !== colsB) {
    console.error("Error: Matrices must have the same dimensions for addition.");
    return null;
  }

  const result = [];
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsA; j++) {
      result[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return result;
}

function subtract(matrixA, matrixB) {
  if (!isValidMatrix(matrixA) || !isValidMatrix(matrixB)) {
    return null;
  }

  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  if (rowsA !== rowsB || colsA !== colsB) {
    console.error("Error: Matrices must have the same dimensions for subtraction.");
    return null;
  }

  const result = [];
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsA; j++) {
      result[i][j] = matrixA[i][j] - matrixB[i][j];
    }
  }
  return result;
}

function multiply(matrixA, matrixB) {
  if (!isValidMatrix(matrixA) || !isValidMatrix(matrixB)) {
    return null;
  }

  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  if (colsA !== rowsB) {
    console.error("Error: Number of columns in the first matrix must equal the number of rows in the second matrix for multiplication.");
    return null;
  }

  const result = Array(rowsA).fill(0).map(() => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return result;
}

function transpose(matrix) {
  if (!isValidMatrix(matrix)) {
    return null;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = Array(cols).fill(0).map(() => Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

module.exports = {
  add,
  subtract,
  multiply,
  transpose,
  isValidMatrix
};
