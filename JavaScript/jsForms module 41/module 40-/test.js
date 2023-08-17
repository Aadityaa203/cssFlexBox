//module 40
// var hiddenMessage = document.getElementById("message");

// function showMessage(){
//     hiddenMessage.className = ("show");

// }
// setTimeout(showMessage, 3000);

var changeColor = document.getElementById("colorChanger");
var colors = ["red", "blue", "cyan", "yellow", "orange", "violet"];
 var counter = 0;

 function rainbowChange(){
    //reset the counter
    if(counter >= colors.length){
        counter = 0;
    }
    //change the background colors t0 violet
    changeColor.style.background = colors[counter];
    counter++;
 }
 var timer = setInterval(rainbowChange, 2000);

 changeColor.onclick = function(){
    clearInterval(timer);
    changeColor.innerHTML = "time Stopped";
 }