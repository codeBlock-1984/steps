function lilysHomework(arr) {
  const [resOne, resTwo] = high(arr);
  console.log(resOne, resTwo);
  let res = resOne > resTwo ? resTwo : resOne;
  return res;

  function high(arr) {
    let arrTwo = arr.slice();
    console.log(arrTwo)
    let isBeautiful = false, count = 0, exLow = [], exHigh = [], i=0, j = 0;
  
    while (!isBeautiful) {
      console.log(arr, arrTwo, exLow, exHigh);
      const { indexLow, least, isSortedLow, indexHigh, highest, isSortedHigh } = getHighestElement(arr.length, arr, arrTwo, exHigh, exLow);
      // console.log(count, arr, index, highest, isSorted);
      isBeautiful = isSortedHigh || isSortedLow ? true : false;
      if (isBeautiful) {
        break;
      } else {
        exHigh.push(highest);
        exLow.push(least);
        if (arr[count] !== highest) {
          const x = arr[count];
          arr[count] = highest;
          arr[indexHigh] = x;
          j++;
        }
        if (arrTwo[count] !== least) {
          const y = arrTwo[count];
          arrTwo[count] = least;
          arrTwo[indexLow] = y;
          i++;
        }
        count++;
      }
  
      function getHighestElement(len, arr, arrTwo, exHigh, exLow) {
        let highest = -Infinity, isSortedHigh = true, prevHigh = Infinity, indexHigh = -1;
        let least = Infinity, isSortedLow = true, prevLow = 0, indexLow = -1;
        for (let i=0; i<len; i++) {
          const currHigh = arr[i];
          const currLow = arrTwo[i];
          isSortedHigh = currHigh > prevHigh ? false : isSortedHigh !== true ? false : true;
          isSortedLow = currLow < prevLow ? false : isSortedLow !== true ? false : true; 
          if (currHigh > highest && !exHigh.includes(currHigh)) {
            highest = currHigh;
            indexHigh = i;
          }
          if (currLow < least && !exLow.includes(currLow)) {
            least = currLow;
            indexLow = i;
          }
          prevLow = currLow;
          prevHigh = currHigh;
        }
        return { indexHigh, indexLow, highest, least, isSortedHigh, isSortedLow };
      }
    }
  
    return [i, j];
  }
}


const input = [[2, 5, 3, 1], [7, 15, 12, 3], [3, 4, 2, 5, 1]];
const res = lilysHomework(input[2]);
console.log(res);
