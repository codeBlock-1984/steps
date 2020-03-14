function staircase(n) {
  let count = 1;
  while (n >= count) {
    let step = '';
    for (let i = 0; i < n - count; i++) {
      step += ' '; 
    }
    for (let i = 0; i < count; i++) {
      step += '#';
    }
    console.log(step);
    count++;
  }
}

staircase(6);
// console.log(staircase(2));