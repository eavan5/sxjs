const compose = (...fns) => fns.reduceRight((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)), value => value);

// function compose(...args) {
//   return (args2) => {
//     let res = args.pop()(args2)
//     if (args.length > 0) {
//       return compose(...args)(args2)
//     } else {
//       return res
//     }
//   }
// }

let toUpperCase = (x) => x.toUpperCase();
let exclaim = (x) => x + '!';
let shout = compose(toUpperCase, exclaim);
console.log(shout);
console.log(shout('hello world'));

