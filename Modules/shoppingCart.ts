import { ShoppingCartItem } from "./ShoppingCartItem"

export class ShoppingCart{
  items_product:Array<ShoppingCartItem>;
  total_prix:number;
constructor(){
  this.items_product=new Array();
  this.total_prix=0;
}
AddProduct(p:ShoppingCartItem){
 let element : ShoppingCartItem | undefined = this.items_product.find(
                x =>x.item_product.get_id()==p.item_product.get_id())
 if(element == undefined){
  this.items_product.push(p);
  p.add_product(p.item_product.get_id()) ;
 
 } 
 else{
    element.add_product(p.item_product.get_id()) ;
 }   
   this.updateTotal();      
  
}
Substract(p:ShoppingCartItem):void{
  let element : ShoppingCartItem|undefined=this.items_product.find(
    x => x.item_product.get_id() == p.item_product.get_id())
if(element!= undefined){
  element.substract_product(p.item_product.get_id());

if(element.quantity==0){
  this.items_product.splice(this.items_product.indexOf(element), 1);
}
}
 this.updateTotal();      
}
private updateTotal() {
   this.total_prix = 0; 
  for (let item of this.items_product){
    this.total_prix=this.total_prix+item.total;
  }
  }
  displayCart(): void {
    console.log("---- Panier ----");
    if (this.items_product.length === 0) {
      console.log("Le panier est vide");
    } else {
      for(let item of this.items_product) {
       item.display_product();
      };
      console.log("----------------");
      console.log("Total : " + this.total_prix + " €");
}
}

}
