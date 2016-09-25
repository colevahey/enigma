"use strict"

var buttonhit = function(){
  console.log("TWAS HIT");
  var message = document.getElementById("enterbar").value
  if (message !== ""){
    console.log(message);
  } else {
    console.log("There is not a message yet");
  }
}
buttonhit()
