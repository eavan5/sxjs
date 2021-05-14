function deepClone(target, map = new WeakMap()) {
  if (typeof target === 'object' && target !== null) {
    const resObj = Array.isArray(target) ? [] : {}
    if (map.has(target)) return map.get(target)
    map.set(target, resObj)
    for (const key in target) {
      resObj[key] = deepClone(target[key], map);
    }
    return resObj
  } else {
    return target
  }
}

const a = deepClone({ a: 1, b: { a: 1 } })
console.log(a);