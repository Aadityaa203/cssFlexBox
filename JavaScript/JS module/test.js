// alert("hello world");
// var hello = "hello world";
// alert(hello);

// console.log(7 - 4);

// var skyIsBlue = false;
// if (skyIsBlue){

//     document.write("Yes, sky is Blue");
// }
// else{
//     document.write ("no sky isn't blue");
//  }

// var myAge = 29;
// if (myAge < 20) {
//   document.write("Get off my life");
// } else if (myAge < 25) {
//   document.write("hey i am Young");
// } else if (myAge < 10) {
//   document.write("Best age to have a Baby");
// } else {
//   document.write("Let's have a baby");
// }

// x = 7;
// x == 7;
// x == "7";
//not true x === 7
//not true x === "7"
// true x != 7

// var x = 7;

// var personAge = 22;
// if(personAge >= 18 && personAge <= 30){
//     document.write("you can goto the concert");
// }
// else{
//     document.write("you need to stay home");
// }

// var personAge = 17;
// if(personAge > 18 || personAge > 30){
//     document.write("you can goto the concert");
// }
// else{
//     document.write("you need to stay home");
// }

//if statement
// var personAge = 27;
// if(personAge > 18 || personAge >= 30 || personAge === 27){
//     document.write("you can goto the concert");
// }
// else{
//     document.write("you need to stay home");
// }

//while loop
// var personAge = 5;
// while (personAge < 10) {
//   console.log("stay home");
//   personAge++;
// }
// document.write("stay home with parents");

// loop
// for (personAge = 5; personAge < 10; personAge++){
//     console.log("you are less than 10");
// }
// document.write("now you are over 10");

//for loop
// var links = document.getElementsByTagName("a");
// for(i = 1; i <= links.length; i++){
//     console.log("this is the link number " + i);
// }
// document.write("all links have been looped");

//for loop with let and break and continue keyword
// for (i = 0; i < 10; i++) {
//   //loop body
//   if (i === 3 || i === 5) {
//     continue;
//   }
//   console.log(i);

//   if (i === 7) {
//     console.log("string of the loop is broken from here");
//     break;
//   }
// }

//add a class to link
// var links = document.getElementsByTagName("a");
// for (var i = 0; i < links.length; i++) {
//   links[i].className = "links " + i;
// }

// //finding an average number
// let a = 4;
// let b = 10;
// function averageNum(a, b){
//   //code body/block
//   var average = (a + b)/2;
//   console.log(average);
//   return average;
// }
// // averageNum(10, 20);
// // averageNum(2, 10);
// // averageNum();
// // averageNum(10, 20, 30);
// // averageNum(a, b);
// // storing data
// var avgResult = averageNum(4, 10);
// console.log("the average is" + avgResult);

// var globalVar = 5; //global variable
// function someFunction(){
//   var localVar = 10; //local variable
// }
//storing global result of avgResult inside a function.
// function logResult(){
//   console.log(" the average is" + avgResult + "inside logResult function");
// }
// logResult();

// var a = 5;
// var b = 6;
// console.log(a+b); //11

// var a = 5;
// var b = "6";
// console.log(a+b); //56

// var a = 5;
// var b = "6";
// console.log(typeof(a+b)); //string

// console.log(Math.round(7.4)); //7

// console.log(Math.round(7.6)); //8

// console.log(Math.floor(7.6)); //7

// console.log(Math.ceil(7.6)); //8

// console.log(Math.max(4, 8, 7, 3, 9, 5)); //9

// console.log(Math.PI) // 3.14159265

// var a = 7;
// var b = 5;
// console.log(a + b); // 75
// console.log(typeof (a + b)); //string
// console.log(a * b); // 35
// console.log(typeof (a * b)); //number

// if (isNaN(a)) {
//   console.log("this is not a number"); // this is Not a number
// } else {
//   console.log("the meaning  of life, universe and everything is " + a * b);
// }

// if (!isNaN(a)) {
//   console.log("this is not a number"); // this is a number (BECAUSE IT HAS !)
// }

// var newString = "Now I'm a super 'crazy' string";
// var otherString = 'Now I\'m a super "crazy" string';
// console.log(newString.length);//30
// console.log(otherString.length);//30
// console.log(newString.toUpperCase());
// console.log(newString.toLowerCase());
// console.log(newString.indexOf('string'));//24
// console.log(newString.indexOf('missing')); // -1 because we don't have missing in the sentence

// if(otherString.indexOf('missing') === -1){
//     console.log ("this word is not found");
// } else {
//     console.log("the word missing starts at position " + otherString.indexOf("missing")); // added missing in otherString
// }

// var stringOne = "the Same";
// var stringTwo = "The same";
// console.log(stringOne === stringTwo); //false JS is case sensitive
// console.log(stringOne.toLowerCase === stringTwo.toLowerCase); //true JS is case sensitive

// var stringOne = "abc";
// var stringTwo = "def";
// console.log(stringOne < stringTwo); // true because abc are smaller than def because they comes first in alphabets

// var str = "hello, world";
// var str2 = str.slice(2); // llo, world   //start from 2 to the end of string
// var str2 = str.slice(2, 9);  // llo, wo
// console.log (str2);

// var hasTag = "fun, sad, mad, happy, upset, angry";
// var tagsArray = hasTag.split(","); // using , means adding space infront of string
// console.log(tagsArray); // ["fun", " sad", " mad", " happy", " upset", " angry"]

//module 24, 25
// var exampleArray = [];
// exampleArray[0] = 25;
// exampleArray[1] = 30;
// exampleArray[2] = true;
// exampleArray[3]= "A string";
// console.log
// exampleArray[2] = false;

// var arrayTwo = [12, 10, false, "hello"];

// var arrayThre = new Array(); // empty array
// var arrayFour = new Array(5); // length of 5
// console.log(arrayTwo.length); // 4

// console.log(arrayTwo.sort()); // it will sort it out
// console.log(arrayTwo.reverse()); // greatest to smallest

// var someString = new String();
// someString = "HOWDY PARTNER";
// console.log(someString.length);
// console.log(someString.toLowerCase());
// var myString = 'some string';

// module 26, 27, 28, 29
//  var littleCar = new Object(); //constructor
//  littleCar.maxSpeed = 50;
//  littleCar.driver = "Sams";
//  console.log(littleCar);

//  littleCar.drive = function(){
//     console.log("car in motion");
//  }
//  littleCar.drive(); //how to call string of "Car in motion"
//  littleCar.drive //it will call the function definition, so we need the parenthesis()
//  console.log(littleCar.drive);

// console.log(this); // displays the whole web page(global scope)
//  var littleCar2 = {
//     maxSpeed: 50,
//     driver: "Rigby",
//     drive: function(){
//         console.log("I am driving");
//     },
//     logDriver: function(){
//         console.log("Driver name is " + this.driver); //(local scope) also mean littlecar2.driver
//     }
//  }
//  var littleCar = {
//     maxSpeed: 60,
//     driver: "Finn",
//     drive: function(){
//         console.log("I am driving");
//     },
//     test: function(){
//         console.log(this); //(local scope)
//     }
//  }
//  littleCar2.test(); // displays an object of all objects of littlecar2
//  littleCar3.test(); // all objects of little car3
//  console.log(littleCar2.maxSpeed); //50
//  littleCar2.drive(); //
//  littleCar2(logDriver);

// var Car = function (maxSpeed, driver) {
//   this.maxSpeed = maxSpeed;
//   this.driver = driver;
//   this.drive = function (speed, time) {
//     console.log(speed * times);
//   };
//   this.logDriver = function () {
//     console.log("driver name is  " + this.driver);
//   };
// };
// var littleCar = new Car(50, "Mario"); //Creating new Object. maxSpeed is 50 and driver is Mario
// littleCar.drive(50, 3); // 150
// var littleCar2 = new Car(88, "Doc");
// var littleCar3 = new Car(42, "Ford perfect");

// var theDate = new Date();
// console.log(theDate);
// var pastDate = new Date(1993, 03, 22, 9, 22, 23);
// var futureDate = new Date(2024, 0, 1);
// console.log(pastDate);
// console.log(futureDate);
// var birthday = new Date(1993, 04, 22, 09, 22, 23);
// console.log(birthday.getMonth());
// console.log(birthday.getDate());
// console.log(birthday.getFullYear());
// console.log(birthday.getDay()); // which day starts from sunday
// console.log(birthday.getHours());
// console.log(birthday.getTime()); // gives millisecond since jan 1st 1970 t0 apr 22 1993

// var birthday = new Date(1993, 3 , 22, 09, 11, 22);
// var birthday2 = new Date(1995, 05 , 11, 09, 11, 22);
// if(birthday.getTime() == birthday2.getTime()){
//     console.log(" husband and wife");
// }else {
//     console.log("never married");
// }
