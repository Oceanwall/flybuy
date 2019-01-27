const swal = require('sweetalert');
const fs = require('fs');


const request = require('request');
const uuidv4 = require('uuid/v4');


window.onload = function() {

  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);

  document.getElementById("selecto").onchange = function() {
    translate(document.getElementById("selecto").value);
    //console.log(document.getElementById("selecto").value);
  }

  let clicked = false;
  document.getElementById("switch").onclick = function() {
    if (clicked) return;
    clicked = true;
    if (document.getElementById("checkbox").disabled) {
      // DOn't do anything
      console.log("disabled");
    }
    else {
      setTimeout(function () {
        document.getElementById("checkbox").disabled = true;
        swal("An attendant has been called, and will be there shortly!", {
          title: "Attendant Call Notification",
          buttons: ["Undo call", "Gotcha!"],
        })
        .then((value) => {
          console.log(value);
          if (value == null) {
            document.getElementById("checkbox").disabled = false;

            swal("Your attendant call has been canceled!", {
              button: "Thanks!",
            });
          }
          else if (value) {
            setTimeout(function () {
              document.getElementById("checkbox").disabled = false;
              swal("Your attendant has arrived!", {
                icon: "success",
                button: "Thanks!",
              });
              document.getElementById('checkbox').click();
            }, 3000);
          }
        });
      }, 800);
    }

  }

  fs.readFile('data/persistence.txt', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    document.getElementById("nameTitle").innerHTML = 'Hello, ' + data.toString().split('\n')[0];
  });

 // translate("fr");
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

var toTranslate = ["Hello", "Menu", "Flight Information", "Customer Feedback", "Call Attendant"];

function translate(language) {
  const subscriptionKey = "be3d29f1a40146c8801bd071c607c795";
  if (!subscriptionKey) {
    throw new Error('Environment variable for your subscription key is not set.')
  };

  function translateText(text, i){
    let options = {
      method: 'POST',
      baseUrl: 'https://api.cognitive.microsofttranslator.com/',
      url: 'translate',
      qs: {
        'api-version': '3.0',
        'to': language
      },
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
      },
      body: [{
        'text': text
      }],
      json: true,
    };

    request(options, function(err, res, body){
      if (i == 0) {
        fs.readFile('data/persistence.txt', 'utf8', function (err, data) {
          if (err) {
            console.log(err);
          }
          document.getElementById("nameTitle").innerHTML = body[0]["translations"][0]["text"] + ', ' + data.toString().split('\n')[0];
        });
      } else if (i==1) {
        document.getElementById("menu").innerHTML = body[0]["translations"][0]["text"];
      } else if(i==2) {
        document.getElementById("plane").innerHTML = body[0]["translations"][0]["text"];
      } else if (i==3){
        document.getElementById("customer").innerHTML = body[0]["translations"][0]["text"];
      } else {
        document.getElementById("request").innerHTML = body[0]["translations"][0]["text"];
      }
    });
  };
  var i = 0;
  while(i < 5) {
    translateText(toTranslate[i], i++);
  }
}