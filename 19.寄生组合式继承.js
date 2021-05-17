function inherit(child, parent) {
  let parentProperty = Object.create(parent.prototype)
  child.prototype = Object.assign(parentProperty, child.prototype)
  parentProperty.constructor = child
}