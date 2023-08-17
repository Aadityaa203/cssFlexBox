// var storeContent = document.getElementsByClassName("findH2");
// console.log(storeContent);

// var storedH2 = storeContent[1].getElementsByTagName("h2");
// console.log(storedH2);

// storeContent[1].innerHTML = "I have changed";

// // document.getElementById("laterUse");

// var docBody = document.getElementsByTagName("body");
// console.log(docBody);

// docBody[0].innerHTML = "<p> I am a Aaditya </p>";

// var pageTitle = document.getElementById("page-title");
// // pageTitle.content; // calling the content title
// // pageTitle.content = "here is the change";// to change the content of the title

// var pTag = document.getElementById("singular");
// // pTag.getAttribute("class"); // how we can get the element inside
// // pTag.setAttribute("class", "newClass"); // how we can change the class name
// pTag.setAttribute("style", "color: blue;"); // we can change the color of the class

// module 34/35/36/37/38

// var title = document.getElementByTitle;

//module 35
// var newItem = document.createElement("li");
// var newPar = document.createElement("p");
// //call
// // newPar;

// var newLink = document.getElementById("container").getElementsByTagName("ul")[0];
// //call
// // newLink[0];
// newLink.appendChild(newItem);
// newItem.appendChild(newPar);
// newPar.innerHTML = "Item number 4, added"; //using JS

// // newLink.insertBefore(newItem, newLink.getElementsByTagName("li")[0]); //moving item 4 on the top of list

// // module 36
// var parent = document.getElementById("container").getElementsByTagName("ul")[0];// selecting the all ul list
// var child = parent.getElementsByTagName("li")[0]; // selecting first li
// var removed = parent.removeChild(child);// removing first li from list
// parent.appendChild(removed);// adding back the removed li to the list but will be added at the end of list

// module 37
// var title = document.getElementById("clickThis");
// title.onclick = function(){
//     alert("hey, i am the alert");
// }

// title.onmouseover = function(){
//     alert("hey, i am a new alert");
// }
// module 38
// var content = document.getElementById("content");
// var button = document.getElementById("show-more");

// button.onclick = function () {
//   if (content.className == "open") {
//     //shrink the box
//     content.className = " ";
//     button.innerHTML = "show more";
//   } else {
//     // expand the box
//     content.className = "open";
//     button.innerHTML = "show less";
//   }
// };

// module 39
//  when JS link is on the top of page
// window.onload = function () {
//   var content = document.getElementById("content");
//   var button = document.getElementById("show-more");

//   button.onclick = function () {
//     if (content.className == "open") {
//       //shrink the box
//       content.className = " ";
//       button.innerHTML = "show more";
//     } else {
//       // expand the box
//       content.className = "open";
//       button.innerHTML = "show less";
//     }
//   };
// };

//window onload
// function eventSetup() {
//   var content = document.getElementById("content");
//   var button = document.getElementById("show-more");
//   button.onclick = function () {
//     if (content.className == "open") {
//       //shrink the box
//       content.className = " ";
//       button.innerHTML = "show more";
//     } else {
//       // expand the box
//       content.className = "open";
//       button.innerHTML = "show less";
//     }
//   };
// }
// window.onload = function () {
//   eventSetup();
// };
// module 40
