var fs = require('fs')

let foodList = {};

window.onload=function() {
  fs.readFile('data/foodPersistence.json', 'utf8', function (err, data) {
    if (err) throw err
    foodList = JSON.parse(data)
    if ("Drink" in foodList) {
      document.getElementById("drink").innerText = foodList["Drink"];
    } else {
      document.getElementById("drink").parentElement.parentElement.hidden = true;
    }
    if ("Entree" in foodList) {
      document.getElementById("meal").innerText = foodList["Entree"];
    } else {
      document.getElementById("meal").parentElement.parentElement.hidden = true;
    }
    if ("Snack" in foodList) {
      document.getElementById("snack").innerText = foodList["Snack"];
    } else {
      document.getElementById("snack").parentElement.parentElement.hidden = true;
    }
  });
  
  
}

function removeItem(type) {
  if ("Drink" === type) {
    document.getElementById("drink").parentElement.parentElement.hidden = true;
  } else if ("Entree" === type) {
    document.getElementById("meal").parentElement.parentElement.hidden = true;
  } else  if ("Snack" === type) {
    document.getElementById("snack").parentElement.parentElement.hidden = true;
  }
  delete foodList[type];
}

function goBack() {
  var stream = fs.createWriteStream('data/foodPersistence.json');
  stream.once('open', function (fd) {
    stream.write(JSON.stringify(foodList));
    stream.end()
    transfer('food_page');
  });
}

function submitFunc() {
  var stream = fs.createWriteStream('data/foodPersistence.json');
  stream.once('open', function (fd) {
    stream.write("{}\n");
    stream.end()
    M.toast({html:"You're order has been submitted!\nAn attendant will be with you shortly", displayLength:2000,
      completeCallback: function(){transfer('landing_page');}});
  });
}