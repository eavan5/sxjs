function deepClone(target, map = new WeakMap()) {
  if (typeof target === 'object' && target !== null) {
    if (map.has(target)) return map.get(target)
    const resObj = Array.isArray(target) ? [] : {}
    map.set(target, resObj)
    for (const key in target) {
      resObj[key] = deepClone(target[key], map);
    }
    return resObj
  }
  return target
}

var a = { a: 1, b: { a } }
console.log(deepClone(a));


