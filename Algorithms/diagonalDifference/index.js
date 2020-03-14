function diagonalDifference(arr) {
  // Write your code here
  const len = arr.length;
  let count = 0;
  let inverseCount = len - 1;
  let result;
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  if (len < 2) {
      return arr[0];
  }
  while (count < len) {
      firstDiagonalSum += arr[count][count];
      secondDiagonalSum += arr[count][inverseCount];
      count++;
      inverseCount--;
  }
  result = Math.abs(firstDiagonalSum - secondDiagonalSum); 
  return result;
}
const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];


const res = diagonalDifference(arr);
console.log(res);