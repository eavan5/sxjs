const fs = require('fs');
fs.readFile('./README.md', 'utf8', (err, data) => {
  console.log(data);
});

function Promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) reject(err);
        resolve(data);
      })
    })
  }
}

const readFleAsync = Promisify(fs.readFile)

readFleAsync('./README.md', 'utf8').then((data) => {
  console.log(data);
})