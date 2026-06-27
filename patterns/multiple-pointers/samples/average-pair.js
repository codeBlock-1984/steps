/*
  Write a function called averagePair. 
  
  Given a sorted array of integers and a target average,
  determine if there is a pair of values in the array where 
  the average of the pair equals the target average.
  
  There may be more than one pair that matches the average target.

  E.g:
  averagePair([1,2,3],2.5) // true
  averagePair([1,3,3,5,6,7,10,12,19],8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([],4) // false
*/

const averagePair = (arr, num) => {
  const target = num * 2;

  let head = 0;
  let tail = arr.length - 1;

  while (head < tail) {
    const currentSum = arr[head] + arr[tail];
    if (currentSum === target) {
      return true;
    } else if (currentSum > target) {
      tail--;
    } else {
      head++;
    }
  }

  return false;
};

module.exports = averagePair;
