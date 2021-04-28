function throttle(fn, wait = 500) {
  let timer
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, wait);
    }
  }
}

//立即执行版(定时器)
function throttle(fn, wait = 500) {
  let timer
  return function (...args) {
    if (!timer) {
      fn.apply(this, args)
      timer = setTimeout(() => timer = null, wait);
    }
  }
}



//立即执行版(通过Date)
// function throttle(fn, wait = 500) {
//   let time = 0
//   return function (...args) {
//     if ((+new Date() - time > wait) || !time) {
//       fn.apply(this, args)
//       time = +new Date
//       return
//     }
//   }
// }

//结合版
function throttle(fn, wait = 500, immediate) {
  let timer
  return function (...args) {
    if (timer) return
    if (immediate) {
      fn.apply(this, args)
      timer = setTimeout(() => timer = null, wait)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, wait)
    }
  }
}

const a = function () {
  console.log('aaa');
}

const b = throttle(a, 2000, 1)
b()
b()
b()
// setTimeout(() => {
//   b()
// }, 500);