var fs = require('fs')

let foodList = {};
const categories = ['Drink', 'Entree', 'Snack'];

window.onload = function () {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {"position": "top", "html": "Make sure to have your credit card ready!"});

  fs.readFile('data/foodPersistence.json', 'utf8', function (err, data) {
    if (err) throw err;
    foodList = JSON.parse(data);

    fs.readFile('data/items.json', 'utf8', function (err, data) {
      if (err) throw err;

      let itemsInfo = JSON.parse(data);
      let total = 0;
      for (let category of categories) {
        if (category in foodList) {
          let item = foodList[category];
          let price = itemsInfo[item].price;
          total += price;
          document.getElementById(category.toLowerCase()).innerText = item;
          document.getElementById(category.toLowerCase() + 'Price').innerText = '$' + price;
        } else {
          document.getElementById(category.toLowerCase()).parentElement.parentElement.hidden = true;
        }
      }
      setTotalPrice(total);
    });
  });
}

function removeItem(type) {
  let totalStr = document.getElementById("totalPrice").innerText;
  let total = parseFloat(totalStr.slice(1));
  let element = document.getElementById(type.toLowerCase() + 'Price');
  element.parentElement.parentElement.hidden = true;
  total -= parseFloat(element.innerText.slice(1));
  setTotalPrice(total);
  delete foodList[type];
}

function setTotalPrice(total) {
  if (total > 0)
    document.getElementById("totalPrice").innerText = '$' + total.toFixed(2);
  else
    document.getElementById("total").parentElement.parentElement.hidden = true;
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
    stream.end();
    if (Object.keys(foodList).length == 0) {
      M.toast({
        html: "Cannot checkout with no items!", displayLength: 1000,
        completeCallback: function () { transfer('food_page'); }
      });
    } else {
      M.toast({
        html: "Your order has been submitted!\nAn attendant will be with you shortly", displayLength: 2000,
        completeCallback: function () { transfer('landing_page'); }
      });
    }
  });
}
