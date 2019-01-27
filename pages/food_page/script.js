var fs = require('fs')

window.onload=function() {

};

var items = {};

function AddToShoppingCart(name, type) {
    if (type in items) {
        M.toast({html: 'Cannot add multiple items of the same type!', displayLength:2000});
    } else {
        items[type] = name;
        var x = document.getElementById("cartspan");
        var n = parseInt(x.innerText.charAt(0)) + 1;
        x.innerText = n + x.innerText.substring(1, x.innerText.length);
        M.toast({html: 'Added ' + name + ' to shopping cart!', displayLength:2000});
    }
}

function toShoppingCart() {
    var stream = fs.createWriteStream('data/foodPersistence.json');
    stream.once('open', function (fd) {
        stream.write(JSON.stringify(items));
        stream.end()

        transfer('cart_page');
    });

}