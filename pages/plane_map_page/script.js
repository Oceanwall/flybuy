const Typed = require('typed.js');
const lineStop = "<br>^100";

function loadImg() {
    let pic=Math.floor(Math.random() * (10));
    // let time=Math.floor(Math.random() * (15000 - 5000) + 5000);
    let time = 500;
    document.getElementById("bathrooms").src="../../images/bathrooms/seat_plan_" + pic + ".png";
    setTimeout(loadImg, time);
}

window.onload=function() {
    loadImg();

    var options = {
      showCursor: false,
      strings: [`Name: John Somebody ${lineStop} AAdvantage Status: <span class="yellow-text text-darken-3">Gold</span> ${lineStop} Origin Airport: DFW ${lineStop} Destination Airport: NRT ${lineStop}`],
      typeSpeed: 20,
      onComplete: writeSecond
    };

    var typed = new Typed("#name-text", options);
}

function writeSecond() {
  var options = {
    showCursor: false,
    strings: [`Planned Departure Time: 10:10 AM ${lineStop} <span class='green-text'>Actual Departure Time: 10:05 AM</span> ${lineStop} Planned Arrival Time: 4:15 PM ${lineStop} <span class="red-text">Estimated Arrival Time: 4:25 PM</span>`],
    typeSpeed: 20
  };

  var typed = new Typed("#flight-text", options);
}
