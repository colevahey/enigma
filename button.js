"use strict"

var buttonhit = function(json,Def0,Def1,Def2,Def3,Def4,Def5,Def6,Def7,Def8,Def9){
  var message = document.getElementById("enterbar").value
  if (message !== ""){
    var rand = Math.floor(Math.random()*10)
    if (rand == 0){
      console.log("IT WAS DEF0")
    }
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
