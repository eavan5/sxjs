function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2)
}


const h = {}
function fib(n) {
  return n < 2 ? n : h[n] ? h[n] : h[n] = fib(n - 1) + fib(n - 2)
};


var fibonacci = function (n) {
  if (!n) return n
  let n1 = 1; n2 = 1;
  for (let i = 2; i < n; i++) {
    [n1, n2] = [n2, n1 + n2]
  }
  return n2
}

console.log(fibonacci());