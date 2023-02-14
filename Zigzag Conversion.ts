enum Direction {
  Down,
  Up,
}

function convert(s: string, numRows: number): string {
  if(!s || !s.length || numRows === 1) {
    return s;
  }
  const matrix = buildMatrix(s, numRows);
  return transformToString(matrix);
}

function buildMatrix(s: string, numRows: number): string[][] {
  const matrix: string[][] = new Array(numRows)
    .fill("")
    .map(() => new Array(s.length).fill(""));

  let direction = Direction.Down;
  let row = 0;
  let col = 0;
  for (let i = 0; i < s.length; i++) {
    matrix[row][col] = s[i];

    if (direction == Direction.Down) {
      if (row == numRows - 1) {
        direction = Direction.Up;
        row--;
        col++;
      } else {
        row++;
      }
    } else {
      if (row <= 0) {
        direction = Direction.Down;
        row++;
      } else {
        row--;
        col++;
      }
    }
  }

  return matrix;
}

function transformToString(matrix: string[][]): string {
  let result = '';
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[row].length; col++) {
      result += matrix[row][col];
    }
  }
  return result;
}

function printMatrix(matrix: string[][]): void {
  for(let i = 0; i < matrix.length; i++) {
    let row = ''
    for(let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] || ' ';
    }
    console.log(row)
  }
}

console.log(convert("PAYPALISHIRING", 3));
