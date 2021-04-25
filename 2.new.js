function myNew(fn, ...args) {
  if (typeof fn !== 'function') throw new TypeError('first param must be a function')
  const newObj = Object.create(fn.prototype)
  const resultObj = fn.apply(newObj, args)
  const isObject = typeof resultObj === 'object' && resultObj !== null
  const isFunction = typeof resultObj === 'function'
  return isObject || isFunction ? resultObj : newObj
}
