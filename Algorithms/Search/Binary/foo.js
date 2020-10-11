const foo = [10, 14, 19, 26, 27, 33, 35, 42, 44];
const bar = 31;
const found = null;

function search(foo, item, low, high) {
  console.log(arguments);
    const mid = Math.round(low + (high - low)/2);
    console.log(mid);
    if (foo[mid] === item) return { value: foo[mid], index: foo.indexOf(31) };
    else if (low === high) return { value: null, index: null };
    else if (foo[mid] > item) search(foo, item, low, mid - 1);
    else if (foo[mid] < item) search(foo, item, mid + 1, high);
}

const res = search(foo, 31, 0, foo.length - 1);
console.log(res, '<>>>>');
