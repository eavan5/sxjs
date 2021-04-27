function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]]
      }
    }
  }
  return array
}


console.log(insertionSort([1, 2, 3, 3, 4, 34, 3, 4, 323, 23233, 323]));