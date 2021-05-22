function inherit(child, parent) {
  let parentProperty = Object.create(parent.prototype)
  child.prototype = Object.assign(parentProperty, child.prototype)
  child.prototype.constructor = child
}

function Children(params) {

}

function Parent(params) {

}

inherit(Children, Parent);
const a = new Children()
console.log(a.constructor);