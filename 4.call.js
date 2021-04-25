Function.prototype.myCall = function (target, ...args) {
  target = target === undefined || target === null ? window : Object(target);
  const methods = Symbol('methods')
  target[methods] = this
  const result = target[methods](...args)
  Reflect.deleteProperty(target, methods)
  return result
}