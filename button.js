"use strict"

var buttonhit = function(){
  console.log("TWAS HIT");
  var message = document.getElementById("enterbar").value
  if (message !== ""){
    console.log("The message is " + message);
    document.getElementById("returnerspot").innerHTML = ('<p>' + message + '</p>')
  } else {
    console.log("There is no message");
    document.getElementById("returnerspot").innerHTML = ('<p>Message</p>')
  }
}
