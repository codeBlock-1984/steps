// 1c 5c 10c 25c 50c 100c

function getChange(m, p) {
  const dens = [1, 5, 10, 25, 50, 100];
  const change = (100*m) - (100*p);
  let index = 5;
  let rem = change;
  const res = [];

  while (rem > 0) {
    const count = getFactor(rem, dens[index]);
    res.unshift(count);
    rem -= dens[index] * count;
    --index;
  }

  return res;
  
  
  function getFactor(rem, den) {
    let factor = 0;
    let currCount = 0;
    while (factor <= rem) {
      factor += den;
      if (factor <= rem) {
        currCount++; 
      }
    }
    return currCount;
  }
}

console.log(getChange(5, 1.49));
