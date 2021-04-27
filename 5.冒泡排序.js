function sort(array) {
  for (let i = 0, length = array.length; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
}

const a = [12, 32, 33, 4, 45, 4323, 2323, 323, 23]
sort(a)
console.log(a);
