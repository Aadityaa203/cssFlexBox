//console.log(global);

global.setTimeout(() => {
  //global here is an object (object notation on arrow function)
  console.log("in the timeout"); //displays in terminal
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
// console.log(document.querySelectorAll); this is wrong, don't do this
