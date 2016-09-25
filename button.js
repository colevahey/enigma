"use strict"

var buttonhit = function(){
  console.log("TWAS HIT");
  var message = document.getElementById("enterbar").value
  if (message !== ""){
    console.log(message);
    document.getElementById("returnerspot").innerHTML = ('<p>' + message + '</p>')
  } else {
    console.log("There is not a message yet");
  }
}
buttonhit()
