"use strict"

var buttonhit = function(json){
  var message = document.getElementById("enterbar").value
  if (message !== ""){
    var cool = Math.floor(Math.random()*20)
    console.log(cool)
    run(message, json)
  } else {
    console.log("There is no message");
    document.getElementById("encodedmessage").innerHTML = 'Message'
  }
}

var run = function(message, json){
  var finalmessage = ""
  if (message.startsWith("#")){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key
    }
    for (var n = 1; n < message.length; n++){
      var jsonindex = message[n]
      finalmessage += ret[jsonindex]
    }
  } else {
    finalmessage += "#"
    for (var n = 0; n < message.length; n++){
      var jsonindex = message[n]
      finalmessage += json[jsonindex]
    }
  }
  document.getElementById("encodedmessage").innerHTML = finalmessage
}
