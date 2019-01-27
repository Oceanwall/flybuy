
window.onload=function() {

};

var items = {};

function AddToShoppingCart(name, type) {
    if (type in items) {
        M.toast({html: 'Cannot add multiple items of the same type!', displayLength:2000});
    } else {
        items[type] = name;
        var x = document.getElementById("cartbutton");
        var n = parseInt(x.innerText.charAt(0)) + 1;
        x.innerText = n + x.innerText.substring(1, x.innerText.length);
    }

}