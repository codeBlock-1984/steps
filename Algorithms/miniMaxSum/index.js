function miniMaxSum(arr) {
  const len = arr.length;
  let count = 0;
  let arrSum = 0;
  let minValue = Infinity;
  let maxValue = -Infinity;

  while (count < len) {
    arrSum += arr[count];
    minValue = arr[count] < minValue ? arr[count] : minValue;
    maxValue = arr[count] > maxValue ? arr[count] : maxValue;
    count++;
  }
  console.log(arrSum - maxValue, arrSum - minValue);

}


