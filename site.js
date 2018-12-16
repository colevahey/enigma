"use strict"

const runner = json => {
  let message
  if (location.search != "") {
    message = location.search
    document.getElementById("enterbar").value = message
  } else {
    message = document.getElementById("enterbar").value
  }
  if (message !== "" && message !== "Ǝ" && message !== "<"){
    let finalmessage = ""
    if (message.startsWith("Ǝ")){
      let ret = {};
      for(let key in json){
        ret[json[key]] = key
      }
      for (let i = 1; i < message.length; i++){
        let jsonindex = message[i]
        if (jsonindex in json) {
          finalmessage += ret[jsonindex]
        } else {
          finalmessage += jsonindex
        }
      }
    } else {
      finalmessage += "Ǝ"
      for (let i = 0; i < message.length; i++){
        let jsonindex = message[i]
        if (jsonindex in json) {
          finalmessage += json[jsonindex]
        } else {
          finalmessage += jsonindex
        }
      }
    }
    document.getElementById("encodedmessage").innerHTML = finalmessage
  } else if (message.startsWith("<")) {
    window.alert("The < is not permitted as the initial character")
    document.getElementById("enterbar").value = ""
    document.getElementById("encodedmessage").innerHTML = 'Encrypted'
  } else {
    document.getElementById("encodedmessage").innerHTML = 'Encrypted'
  }
}

const copytoclip = _ => {
  let tobecopied = document.getElementById("encodedmessage").innerHTML
  let copyspot = document.getElementById("copyspot")
  copyspot.value = tobecopied
  copyspot.select()
  document.execCommand('copy')
}

const tweet = _ => {
  let message = document.getElementById('encodedmessage').innerHTML
  let tweetUrl
  if (message != "Encrypted") {
    tweetUrl = "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fcvenigma.surge.sh%2F&ref_src=twsrc%5Etfw&text=" + message + "&tw_p=tweetbutton&url=http%3A%2F%2Fcolevahey.github.io%2Fenigma"
  } else {
    tweetUrl = "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fcvenigma.surge.sh%2F&ref_src=twsrc%5Etfw&text=Enigma+Encoding+Project&tw_p=tweetbutton&url=http%3A%2F%2Fcolevahey.github.io%2Fenigma"
  }
  window.open(tweetUrl, "", "width=600px,height=500px");
}

const sms = _ => {
  let message = document.getElementById('encodedmessage').innerHTML
  let smsUrl
  if (message != "Encrypted") {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      smsUrl = "sms:&body=" + message + " colevahey.github.io/enigma"
    } else {
      smsUrl = "sms:?body=" + message + " colevahey.github.io/enigma"
    }
  } else {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      smsUrl = "sms:&body=Enigma Encoding Project colevahey.github.io/enigma"
    } else {
      smsUrl = "sms:?body=Enigma Encoding Project colevahey.github.io/enigma"
    }
  }
  window.open(smsUrl)
}
