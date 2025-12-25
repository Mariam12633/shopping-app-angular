"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCartItem_1 = require("./ShoppingCartItem");
var produit_1 = require("./produit");
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items_product = new Array();
        this.total_prix = 0;
    }
    ShoppingCart.prototype.AddProduct = function (p) {
        var element = this.items_product.find(function (x) { return x.item_product.get_id() == p.item_product.get_id(); });
        if (element == undefined) {
            this.items_product.push(p);
            p.add_product(p.item_product.get_id());
        }
        else {
            element.add_product(p.item_product.get_id());
        }
    };
    ShoppingCart.prototype.Substract = function (p) {
        var element = this.items_product.find(function (x) { return x.item_product.get_id() == p.item_product.get_id(); });
        if (element != undefined) {
            element.substract_product(p.item_product.get_id());
            if (element.quantity == 0) {
                this.items_product.splice(this.items_product.indexOf(element), 1);
            }
        }
    };
    ShoppingCart.prototype.displayCart = function () {
        console.log("---- Panier ----");
        if (this.items_product.length === 0) {
            console.log("Le panier est vide");
        }
        else {
            for (var index in this.items_product) {
                console.log("\n\n" + this.items_product[index].display_product() + "\n");
                this.total_prix = this.total_prix + this.items_product[index].total;
            }
            ;
            console.log("----------------");
            console.log("Total : " + this.total_prix + " €");
        }
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
var exampleProduct = new produit_1.Product(1, "Example2 Product", 1);
var p = new ShoppingCartItem_1.ShoppingCartItem(exampleProduct);
var exampleProduct2 = new produit_1.Product(2, "Example2 Product", 10);
var p2 = new ShoppingCartItem_1.ShoppingCartItem(exampleProduct2);
var shoppingCart = new ShoppingCart();
shoppingCart.AddProduct(p);
shoppingCart.AddProduct(p);
shoppingCart.AddProduct(p2);
shoppingCart.displayCart();
