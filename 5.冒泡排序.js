function bubbleSort(array) {
  for (let i = 0, length = array.length; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array
}