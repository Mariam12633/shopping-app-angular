"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartItem = void 0;
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(p) {
        this.item_product = p;
        this.quantity = 0;
        this.total = 0;
    }
    ShoppingCartItem.prototype.add_product = function (id) {
        if (id == this.item_product.get_id()) {
            this.quantity += 1;
            this.total = this.quantity * this.item_product.get_price();
            console.log("produit ajouté avec succés");
        }
        else {
            console.log("produit n'existe pas");
        }
    };
    ShoppingCartItem.prototype.substract_product = function (id) {
        if (id == this.item_product.get_id() && this.quantity > 0) {
            this.quantity -= 1;
            this.total = this.quantity * this.item_product.get_price();
            console.log("-1");
        }
        else if (id == this.item_product.get_id() && this.quantity == 0) {
            console.log("produit supprimé");
        }
        else {
            console.log("ce produit n'existe pas");
        }
    };
    ShoppingCartItem.prototype.display_product = function () {
        console.log("les informations de produits sont");
        console.log("id: " + this.item_product.get_id() + " prix totale " + this.total + " quantité : " + this.quantity);
    };
    return ShoppingCartItem;
}());
exports.ShoppingCartItem = ShoppingCartItem;
// Example usage:
// const exampleProduct = new Product(2, "Example2 Product", 100);
//let p = new ShoppingCartItem(exampleProduct);
//p.add_product(2);
// p.display_product();
