const xyz = require("./people"); //this is how we can connect people.js to modules file

console.log(xyz); //returns empty object because we don't have anything in modules file, after export it will return people data, now xyz = people

console.log(xyz.people, xyz.ages); //outputs only objects inside people and ages

// const { people } = require("./people");
const { people, ages } = require("./people");
console.log(people, ages);

const os = require("os"); //operationg system
console.log(os);
console.log(os.platform(), os.homedir());
