
const fs = require('fs');

const request = require('request');
const uuidv4 = require('uuid/v4');

var click = true;
function submitFunc()  {
    if (click) {
        click = false;
        var x = document.getElementById("submitbtn");
        x.className += " disabled";
        M.toast({html: 'Feedback Submitted!', displayLength:2000, completeCallback: function(){transfer('landing_page');}});
    }
}

window.onload = function() {

    fs.readFile('data/language.json', 'utf8', function (err, data) {
        if (err) throw err;
        translate(data);
    });
}


var toTranslate = ["Customer Feedback", "Category", "Cleanliness", "Hospitality",
"Food and Drink Quality", "In-Flight Entertainment", "Seating Comfort", "Additional Feedback", "Submit"];

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
                document.getElementById("one").innerHTML = body[0]["translations"][0]["text"];
            } else if (i==1) {
                document.getElementById("two").innerHTML = body[0]["translations"][0]["text"];
            } else if(i==2) {
                document.getElementById("three").innerHTML = body[0]["translations"][0]["text"];
            } else if (i==3){
                document.getElementById("four").innerHTML = body[0]["translations"][0]["text"];
            }else if (i==4){
                document.getElementById("five").innerHTML = body[0]["translations"][0]["text"];
            }else if (i==5){
                document.getElementById("six").innerHTML = body[0]["translations"][0]["text"];
            }else if (i==6){
                document.getElementById("seven").innerHTML = body[0]["translations"][0]["text"];
            }else if (i==7){
                document.getElementById("eight").innerHTML = body[0]["translations"][0]["text"];
            } else {
                document.getElementById("submitspan").innerHTML = body[0]["translations"][0]["text"];
            }
        });
    };
    var i = 0;
    while(i < 9) {
        translateText(toTranslate[i], i++);
    }
}