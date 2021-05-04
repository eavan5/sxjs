class MyPromise {
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
      if (this.state !== 'PENDING') return
      this.state = 'FULFILLED'
      this.value = value
      this.onFulfilledCB.forEach(fn => fn())
    }
    function reject(reason) {
      if (this.state !== 'PENDING') return
      this.state = 'FULFILLED'
      this.reason = reason
      this.onRejectedCB.forEach(fn => fn())
    }
  }
  then(onFulfilled, onRejected) {
    if (this.state === 'FULFILLED') {
      onFulfilled(this.value)
    }
    if (this.state === 'REJECTED') {
      onRejected(this.reason)
    }
    if (this.state === 'PENDING') {
      this.onFulfilledCB.push(() => onFulfilled(this.value))
      this.onRejectedCB.push(() => onRejected(this.reason))
    }
  }
}

const a = new MyPromise(function (resolve, reject) {
  setTimeout(() => {
    resolve(666)
  }, 2000);
})

a.then(res => {
  console.log(res);
})