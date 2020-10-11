
  function genMinCost(arr) {
    const magicSquarePool = [
      [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
      [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
      [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
      [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
      [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
      [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
      [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
      [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
      ];
    
    let minCost = Infinity;
    let count = 0;
    let squareIndex;

    for (let item of magicSquarePool) {
      let cost = 0;
      item = item[0].concat(item[1]).concat(item[2]);
      const arrList = arr[0].concat(arr[1]).concat(arr[2]);
      for (let i=0; i<item.length; i++) {
        if (item[i] !== arrList[i]) {
          cost += Math.abs(item[i] - arrList[i]);
        }
      }
      console.log(cost, minCost);
      if (minCost > cost) {
        minCost = cost;
        squareIndex = count;
      }
      count++;
    }
    return { minCost, arr: magicSquarePool[squareIndex] };
  }

  let arr = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
  const res = genMinCost(arr);
  console.log(res);

