Promise.myRace = (arr) => {
  return new Promise(function (resolve, reject) {
    arr.forEach((item) => {
      item.then(resolve, reject)
    })
  })
}