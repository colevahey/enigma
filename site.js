"use strict"

var runner = function(json){
  var message = document.getElementById("enterbar").value
  if (message !== "" && message !== "Ǝ" && message !== "<"){
    var finalmessage = ""
    if (message.startsWith("Ǝ")){
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
      finalmessage += "Ǝ"
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
  } else if (message == "<") {
    window.alert("FORBIDDEN")
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

var tweet = function (){
	var message = document.getElementById('encodedmessage').innerHTML
  if (message != "Encrypted") {
    var tweetUrl = "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fcvenigma.surge.sh%2F&ref_src=twsrc%5Etfw&text=" + message + "&tw_p=tweetbutton&url=http%3A%2F%2Fcolevahey.github.io%2Fenigma"
  } else {
    var tweetUrl = "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fcvenigma.surge.sh%2F&ref_src=twsrc%5Etfw&text=Enigma+Encoding+Project&tw_p=tweetbutton&url=http%3A%2F%2Fcolevahey.github.io%2Fenigma"
  }
  window.open(tweetUrl);
}

var sms = function (){
  var message = document.getElementById('encodedmessage').innerHTML
  if (message != "Encrypted") {
    //HAVE TO HAVE A CHECK FOR PHONE MAKE
    var smsUrl = "sms:?body=" + message + " colevahey.github.io/enigma"
  } else {
    var smsUrl = "sms:?body=Enigma Encoding Project colevahey.github.io/enigma"
  }
  window.open(smsUrl)
}
