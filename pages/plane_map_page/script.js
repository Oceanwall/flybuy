const Typed = require('typed.js');

function loadImg() {
    let pic=Math.floor(Math.random() * (10));
    // let time=Math.floor(Math.random() * (15000 - 5000) + 5000);
    let time = 500;
    document.getElementById("bathrooms").src="../../images/bathrooms/seat_plan_" + pic + ".png";
    setTimeout(loadImg, time);
}

window.onload=function() {
    loadImg();

    let lineStop = "<br>^100";

    var options = {
      showCursor: false,
      strings: [`Name: John Somebody ${lineStop} AAdvantage Status: Gold ${lineStop} Origin Airport: NRT ${lineStop} Destination Airport: DFW ${lineStop}`],
      typeSpeed: 60
    };

    var typed = new Typed("#name-text", options);

}
