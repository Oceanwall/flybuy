var fs = require('fs')


var items = {};

window.onload = function () {
    fs.readFile('data/foodPersistence.json', 'utf8', function (err, data) {
        if (err) throw err
        if (data) {
            items = JSON.parse(data)

            var length = 0;
            for (var i in items) {
                if (items.hasOwnProperty(i)) length++;
            }
            var x = document.getElementById("cartspan");
            x.innerText = length + x.innerText.substring(1, x.innerText.length);
        }
    })
};

function AddToShoppingCart(name, type) {
    if (type in items) {
        M.toast({ html: 'Cannot add multiple items of the same type!', displayLength: 2000 });
    } else {
        items[type] = name;
        var x = document.getElementById("cartspan");
        var n = parseInt(x.innerText.charAt(0)) + 1;
        x.innerText = n + x.innerText.substring(1, x.innerText.length);
        M.toast({ html: 'Added ' + name + ' to shopping cart!', displayLength: 2000 });
    }
}

function toShoppingCart() {
    var length = 0;
    for (var i in items) {
        if (items.hasOwnProperty(i)) length++;
    }
    if (length > 0) {
        var stream = fs.createWriteStream('data/foodPersistence.json');
        stream.once('open', function (fd) {
            stream.write(JSON.stringify(items));
            stream.end()

            transfer('cart_page');
        });
    } else {
        M.toast({ html: "Cannot checkout with no items!", displayLength: 2000 });
    }

}