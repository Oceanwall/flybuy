var fs = require('fs')

let foodList = {};

window.onload=function() {
  fs.readFile('data/foodPersistence.json', 'utf8', function (err, data) {
    if (err) throw err
    let obj = JSON.parse(data)
    document.getElementById("list").innerHTML=obj
  })
}

