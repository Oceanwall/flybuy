var fs = require('fs')

let foodList = {};

window.onload=function() {
  fs.readFile('data/foodPersistence.json', 'utf8', function (err, data) {
    if (err) throw err
    foodList = JSON.parse(data)

        //document.getElementById("list").innerText+=obj
  })
}

function goBack() {

  transfer('food_page');
}