function random() {
    let pic=Math.floor(Math.random() * (10));
    document.getElementById("bathrooms").src="../../images/bathrooms/seat_plan_" + pic + ".png";
    while(true) {
        pic=Math.floor(Math.random() * (10));
        let time=Math.floor(Math.random() * (15000 - 5000) + 5000);
        setTimeout(function() {
            document.getElementById("bathrooms").src="../../images/bathrooms/seat_plan_" + pic + ".png";
            console.log("im setting pic" + pic)
        }, 3000);
    }
}

function setImg(num) {
    console.log("setting img!");
    document.getElementById("bathrooms").src="../../images/bathrooms/seat_plan_" + num + ".png";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload=function() {
    random();
}
