const people = ["Charlie", "Lucy", "Linus", "Snoopy"];
const ages = [20, 25, 30, 35];
console.log(people);

// module.exports = people; //xyz in module is now people
module.exports = { people, ages };
