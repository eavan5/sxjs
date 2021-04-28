//普通
function debounce(fn, wait = 500) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout((...args) => {
      fn.apply(this, args)
    }, wait);
  }
}

//立即执行版
function debounce(fn, wait = 500) {
  let timer
  let immediate = true
  return (...args) => {
    if (immediate) {
      immediate = false
      fn.apply(this, args)
    }
    clearTimeout(timer)
    timer = setTimeout(() => immediate = true, wait)
  }
}

// 最终版
function debounce(fn, wait = 500, immediate = false) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    if (immediate) {
      immediate = false
      fn.apply(this, args)
      timer = setTimeout(() => immediate = true, wait)
    } else {
      timer = setTimeout(() => fn.apply(this, args), wait)
    }
  }
}
