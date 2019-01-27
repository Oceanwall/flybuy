function loadImg() {
    let pic=Math.floor(Math.random() * (10));
    let time=Math.floor(Math.random() * (15000 - 5000) + 5000);
    document.getElementById("bathrooms").src="../../images/bathrooms/seat_plan_" + pic + ".png";
    console.log("i loaded thi thing");
    setTimeout(loadImg, time);
}

window.onload=function() {
    loadImg();
}
