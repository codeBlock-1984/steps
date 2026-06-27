const collectOdd = (arr) => {
  let result = [];
  if (!arr.length) return [];

  if (arr[0] % 2 !== 0) result.push(arr[0]);

  result = result.concat(collectOdd(arr.slice(1)));

  return result;
};

const collectOddVariant = (arr) => {
  let result = [];

  const helper = (l) => {
    if (!l.length) return;
    if (l[0] % 2 !== 0) result.push(l[0]);
    helper(l.slice(1));
  };

  helper(arr);

  return result;
};

module.exports = collectOddVariant;
