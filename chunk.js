function chunk(arr, n) {
  let container = [];
  for (let i = 0; i < arr.length; i += n) {
    container.push(arr.slice(i, i + n));
  }
  return container;
}
console.log(chunk([1, 2, 3, 4, 5], 2));

function chunkie(arr, n) {
  let container = [];
  let ind = 0;
  while (ind < arr.length) {
    container.push(arr.slice(   ind, ind + n) );
    ind += n;
  }
  return container;
}
console.log(chunkie([1, 2, 3, 4, 5], 2));

function chunker(arr, size) {
  const chunked = []
  for (let item of arr) {
    let last = chunked[chunked.length - 1];
    (!last || last.length === size) ? chunked.push([item]): last.push(item)
  }
  return chunked;
}

console.log(chunker([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 4));
