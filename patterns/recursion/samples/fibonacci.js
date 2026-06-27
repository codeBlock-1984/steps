function fibonacci(n) {
  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciOptimized(n, memo = {}) {
  if (n <= 2) return 1;

  if (memo[n]) return memo[n];

  const result =
    fibonacciOptimized(n - 1, memo) + fibonacciOptimized(n - 2, memo);
  memo[n] = result;

  return result;
}

function fibonacciIterative(n) {
  if (n < 2) return n;

  const arr = [0, 1];

  for (let i = 3; i <= n; i++) {
    const nextVal = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = nextVal;
  }

  return arr[0] + arr[1];
}

module.exports = fibonacciIterative;
