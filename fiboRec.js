function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
const res = [];
for (let i = 0; i < 10; i += 1) {
  res.push(fibonacci(i));
}
console.log(res);