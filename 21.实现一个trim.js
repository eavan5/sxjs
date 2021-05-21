function trim(str) {
  return str.replace(/^\s*|\s*$/g, '')
}

console.log(trim('      2121    ').length);
// console.log(str);