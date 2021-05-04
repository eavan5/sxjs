function resolvePromise(x, promise2, resolve, reject) {
  //解决循环引用问题
  if (x === promise2) throw new TypeError('这样会循环引用')
  //如果promise2是一个函数或者对象
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let called
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, function (y) {
          if (called) return
          called = true
          //这里的y也有可能是一个promise,所以继续解析
          resolvePromise(y, promise2, resolve, reject)
        }, function (r) {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    // 普通值
    resolve(x)
  }

}

class Promise {
  constructor(executor) {
    this.state = 'PENDING'
    this.onFulfilledCB = []
    this.onRejectedCB = []
    this.value = ''
    this.reason = ''
    try {
      executor(resolve.bind(this), reject.bind(this))
    } catch (error) {
      reject(error)
    }
    function resolve(value) {
      if (this.state === 'PENDING') {
        this.state = 'FULFILLED'
        this.value = value
        this.onFulfilledCB.forEach(fn => fn())
      }
    }
    function reject(reason) {
      if (this.state === 'PENDING') {
        this.state = 'REJECTED'
        this.reason = reason
        this.onRejectedCB.forEach(fn => fn())
      }
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : r => r
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e }
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === 'FULFILLED') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(x, promise2, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
      if (this.state === 'REJECTED') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(x, promise2, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
      if (this.state === 'PENDING') {
        this.onFulfilledCB.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(x, promise2, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
        this.onRejectedCB.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(x, promise2, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
      }
    })
    return promise2
  }
  catch(err) {
    this.then(null, err)
  }
}


Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise(function (resolve, reject) {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}

module.exports = Promise