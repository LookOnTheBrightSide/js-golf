function chunk(arr, n) {
  const container = [];
  for (let i = 0; i < arr.length; i += n) {
    container.push(arr.slice(i, i + n));
  }
  return container;
}

function chunkie(arr, n) {
  const container = [];
  let ind = 0;
  while (ind < arr.length) {
    container.push(arr.slice(ind, ind + n));
    ind += n;
  }
  return container;
}

function chunker(arr, size) {
  const chunked = [];
  for (const item of arr) {
    const last = chunked[chunked.length - 1];
    (!last || last.length === size) ? chunked.push([item]): last.push(item);
  }
  return chunked;
}

module.exports.chunkie = chunkie;
module.exports.chunk = chunk;
module.exports.chunker = chunker;
