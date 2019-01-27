const Typed = require('typed.js');
const lineStop = "<br>^100";
const fs = require('fs');
const moment = require('moment');

let endInfo = {};

function loadImg() {
  let pic = Math.floor(Math.random() * (10));
  let time=Math.floor(Math.random() * (5000) + 5000);
  // let time = 500;
  document.getElementById("bathrooms").src = "../../images/bathrooms/seat_plan_" + pic + ".png";
  setTimeout(loadImg, time);
}

window.onload = function () {
  loadImg();

  document.getElementById("flight3-text").onclick = function () {
    transfer("food_page");
  }

  document.getElementById("flight6-text").onclick = function () {
    transfer("service_page");
  }

  fs.readFile('data/persistence.txt', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }

    let lines = data.toString().split('\n');
    let name = lines[0];
    let start = lines[1];

    fs.readFile('data/flightData.json', 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      }
      let obj = JSON.parse(data)

      endInfo = obj[start].flights[parseInt(lines[2])];
      let end = endInfo.destination;

      var options = {
        showCursor: false,
        strings: [`Name: ${name} ${lineStop} AAdvantage Status: <span class="yellow-text text-darken-3">Gold</span> ${lineStop} Origin Airport: ${start} ${lineStop} Destination Airport: ${end} ${lineStop}`],
        typeSpeed: 20,
        onComplete: writeSecond
      };

      var typed = new Typed("#name-text", options);
    });
  });
}

function writeSecond() {
  let dep = endInfo.departureTime;
  let depTime = dep.hour.pad() + ':' + dep.minute.pad();
  let minutesAfter = Math.floor(Math.random() * 20);
  let actDep = moment(depTime, 'HH:mm').add(minutesAfter, 'minutes').format("HH:mm");

  let arrTime = moment(depTime, 'HH:mm').add(endInfo.durationInMinutes, 'minutes').format("HH:mm");
  let minutesDelta = Math.floor(Math.random() * 40) - 20;
  let color = minutesDelta < 0 ? 'green-text' : 'red-text';
  let actArr = moment(arrTime, 'HH:mm').add(minutesDelta, 'minutes').format("HH:mm");

  let timeText = `Planned Departure Time: ${depTime}<br><span class='red-text'>Actual Departure Time: ${actDep}</span><br>Planned Arrival Time: ${arrTime}<br><span class="${color}">Estimated Arrival Time: ${actArr}</span>`;
  document.getElementById("flight-text-p").innerHTML = timeText;

  let flightText = `Flight Number: ${endInfo.flightNumber}<br>Airplane Model: Airbus ${endInfo.aircraftType}`;
  document.getElementById("flight2-text-p").innerHTML = flightText;

  document.getElementById("flight-text").style.opacity = 1;
  document.getElementById("flight2-text").style.opacity = 1;
  document.getElementById("flight3-text").style.opacity = 1;
  document.getElementById("flight4-text").style.opacity = 1;
  document.getElementById("flight5-text").style.opacity = 1;
  document.getElementById("flight6-text").style.opacity = 1;
}

// https://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}
