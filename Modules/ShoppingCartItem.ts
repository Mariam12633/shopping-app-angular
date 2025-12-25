import { Product } from './produit';
export class ShoppingCartItem{
  item_product:Product;
  quantity:number;
  total:number;
  constructor(p:Product){
    this.item_product=p;
    this.quantity=0;
    this.total=this.item_product.get_price();
  }
  add_product(id:string):void{
    if(id == this.item_product.get_id()){
      this.quantity+=1;
      this.total=this.quantity*this.item_product.get_price();
    }
    else{
      console.log("produit n'existe pas");
    }
  }
  substract_product(id:string):void{
    if(id == this.item_product.get_id() && this.quantity>0){
      this.quantity-=1;
       this.total=this.quantity*this.item_product.get_price();
        console.log("-1");
    }
    else if(id == this.item_product.get_id() && this.quantity==0){
           console.log("produit supprimé");
    }
    else{
      console.log("ce produit n'existe pas")
    }

  }
  display_product():void{
   console.log("id: "+this.item_product.get_id()+" prix totale " + this.total + " quantité : " + this.quantity );

  }
}
// Example usage:

// const exampleProduct = new Product(2, "Example2 Product", 100);
 //let p = new ShoppingCartItem(exampleProduct);
 //p.add_product(2);
// p.display_product();