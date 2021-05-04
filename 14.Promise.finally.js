Promise.prototype.finally = function (callback) {
  return this.then(data => {
    return Promise.resolve(callback()).then(() => data)
  }, err => {
    return Promise.resolve(callback()).then(() => {
      throw err
    })
  })
}