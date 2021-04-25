function myInstanceof(param, type) {
  if (!(['object', 'function'].includes(typeof param)) || param === null) return false
  const prop = type.prototype
  const paramProp = Object.getPrototypeOf(param)
  while (true) {
    if (paramProp === null) return false
    if (prop === paramProp) return true
    paramProp = Object.getPrototypeOf(paramProp)
  }
}
console.log(myInstanceof(null, Object));