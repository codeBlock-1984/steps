const hyp = Math.hypot(3, 4);
const crt = Math.cbrt(27);
const srt = Math.sqrt(144);
const pow = Math.pow(3, 2);
const pi = Math.PI;

function getRand(max) {
  const rand = Math.random();
  console.log(rand);
  return Math.floor(rand * max);
}

console.log(getRand(5));

//console.log(hyp, crt, srt, pow, pi);