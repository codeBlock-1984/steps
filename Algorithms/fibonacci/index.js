const getFib = (n) => {
  const arr = [0, 1];
  let len = arr.length;
  let res;
    getInner(n, len);

  function getInner(n, len) {
    if (n === 1) {
      res = 0;
    } else if (n === 2) {
      res = 1;
    } else if ((n) !== (len)) {
      arr.push(arr[len-1] + arr[len-2]);
      len = arr.length;
      getInner(n, len);
    } else {
      // console.log(arr);
      // console.log(arr[len-1]);
      res = arr[len-1];
    }
  }
  return res;
};

const res = getFib(2);
console.log(res);

//Optimized solution
function getNthFib(n) {
  // Write your code here.
	  const arr = [0, 1];
  let res;
  let count = 3;

  while (count <= n) {
    res = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = res;
    count++;
  }
  return n > 1 ? arr[1] : arr[0];
}
