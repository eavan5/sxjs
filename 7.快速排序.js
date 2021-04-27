function quickSort(array) {
  if (array.length <= 1) return array
  let left = [], right = [], mid = array.splice(0, 1)
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (item < mid) {
      left.push(item)
      continue
    }
    right.push(item)
  }
  return quickSort(left).concat(mid, quickSort(right))
}

console.log(quickSort([1, 2, 3, 4, 3, 4, 35, 54, 5, 4, 323232, 21, 0]));