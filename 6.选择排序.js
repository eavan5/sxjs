function sort(array) {
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = i; j < length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array
}

console.log(sort([2, 21, 3, 3, 24, 32, 34, 2, 1, 21, 21]));