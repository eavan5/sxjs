function selectionSort(array) {
  for (let i = 0, length = array.length; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array
}

console.log(selectionSort([2, 21, 3, 3, 24, 32, 34, 2, 1, 21, 21]));