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

    document.getElementById("flight3-text").onclick = function() {
      transfer("food_page");
    }

    var options = {
      showCursor: false,
      strings: [`Name: John Somebody ${lineStop} AAdvantage Status: <span class="yellow-text text-darken-3">Gold</span> ${lineStop} Origin Airport: DFW ${lineStop} Destination Airport: NRT ${lineStop}`],
      typeSpeed: 1,
      onComplete: writeSecond
    };

    var typed = new Typed("#name-text", options);
}

function writeSecond() {
  document.getElementById("flight-text").style.opacity = 1;
  document.getElementById("flight2-text").style.opacity = 1;
  document.getElementById("flight3-text").style.opacity = 1;
  document.getElementById("flight4-text").style.opacity = 1;
}
