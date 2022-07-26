"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = 'fanny pack';
var shipping;
var taxPercent;
var total;
var taxTotal;
var shippingAddress = '575 Broadway, New York City, New York';
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
console.log(productName);
if (product.preOrder === true) {
    console.log('We will send you a message when your product is on its way.');
}
if (product.price > 25) {
    shipping = 0;
    console.log("This product's price is over $25, it will receive free shipping.");
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = product.price * taxPercent;
total = product.price * taxTotal + shipping;
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
