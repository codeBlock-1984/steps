function getLongFactorials(n) {
  let flag = 0;
  let result = 1;
  while (flag < n) {
    result *= (n - flag);
    flag++;
  }
  console.log(result.toFixed(0));
  f(result);
}
// Please call 07002779800 or send a mail to callcentre@avonhealthcare.com to get your ID number
function f(bigNumber) {
  const [a, b] = `${bigNumber}`.split('e+');
  const [c, d] = a.split('.');
  const len = d.length;
  const zeroCount = Number(b) - Number(len);
  let count = zeroCount;
  let str = [c, d].join('');
  while (count) {
    str += '0';
    count--;
  }
  console.log(a, b, c, d, len, str, zeroCount);
}

const res = getLongFactorials(25);
console.log(res);
