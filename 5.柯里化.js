function add(a, b, c) {
  return a + b + c
}
const add2 = curry(add)

function curry(fn, cache = []) {
  return function (...args) {
    const allArray = [...cache, ...args]
    if (fn.length === allArray.length) {
      return fn.call(this, ...allArray)
    } else {
      return curry.call(this, fn, allArray)
    }
  }
}

console.log(add2(1)(2)(3));