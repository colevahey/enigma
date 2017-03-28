"use strict"

var runner = function(json){
  var message = document.getElementById("enterbar").value
  if (message !== ""){
    var finalmessage = ""
    if (message.startsWith("#")){
      var ret = {};
      for(var key in json){
        ret[json[key]] = key
      }
      for (var n = 1; n < message.length; n++){
        var jsonindex = message[n]
        if (jsonindex in json) {
          finalmessage += ret[jsonindex]
        } else {
          finalmessage += jsonindex
        }
      }
    } else {
      finalmessage += "#"
      for (var n = 0; n < message.length; n++){
        var jsonindex = message[n]
        if (jsonindex in json) {
          finalmessage += json[jsonindex]
        } else {
          finalmessage += jsonindex
        }
      }
    }
    document.getElementById("encodedmessage").innerHTML = finalmessage
    console.log(finalmessage)
  } else {
    document.getElementById("encodedmessage").innerHTML = 'Encrypted'
  }
}

var copytoclip = function (){
  var tobecopied = document.getElementById("encodedmessage").innerHTML
  var copyspot = document.getElementById("copyspot")
  copyspot.value = tobecopied
  copyspot.select()
  document.execCommand('copy')
}
