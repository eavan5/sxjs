Promise.all = function (array) {
  let count = array.length
  const returnArr = []
  function isPromise(value) {
    return typeof value.then === 'function'
  }
  return new Promise(function (resolve, reject) {
    function insertData(index, value) {
      returnArr[index] = value
      if (!--count) {
        resolve(returnArr)
      }
    }
    for (let index = 0; index < count; index++) {
      const element = array[index];
      if (isPromise(element)) {
        element.then(res => {
          insertData(index, res)
        }, reject)
      } else {
        insertData(index, element)
      }
    }
  })
}

Promise.all([Promise.resolve(111), Promise.resolve(222), Promise.resolve(333), 221]).then(res => {
  console.log(res);
})