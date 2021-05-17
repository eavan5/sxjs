Function.prototype.myBind = function (target, ...args) {
  const thisFn = this
  let returnFn = function (...args2) {
    const isNew = this instanceof returnFn //判断是否被new
    return thisFn.call(isNew ? this : target, ...args, ...args2)
  }
  returnFn.prototype = Object.create(thisFn.prototype); //还原老函数原型
  return returnFn
}