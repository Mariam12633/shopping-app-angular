"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, title, price) {
        this.product_id = id;
        this.product_price = price;
        this.product_title = title;
    }
    Product.prototype.get_id = function () {
        return this.product_id;
    };
    Product.prototype.get_price = function () {
        return this.product_price;
    };
    Product.prototype.print_product = function () {
        console.log("les informations de produits sont");
        console.log("prix: " + this.product_price + " id: " + this.product_id + " titre: " + this.product_title);
    };
    return Product;
}());
exports.Product = Product;
