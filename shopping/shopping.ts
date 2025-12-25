import { Component } from '@angular/core';
import {ShoppingCart} from '../Modules/shoppingCart';
import { ShoppingCartItem } from '../Modules/ShoppingCartItem';
import { Product } from '../Modules/produit';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{ Panier } from '../panier/panier'
import{ ShoppingService} from '../services/shopping-service'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping',
   standalone: true,    
 imports: [FormsModule,CommonModule,Panier,RouterLink],  
  templateUrl: './shopping.html',
  styleUrl: './shopping.css',
})
export class Shopping {
  products: Product[] = [];
  cart!: ShoppingCart;  
categories = ['tous', 'Tablette', 'Phone', 'TV'];
 c :boolean=false;
   


 constructor(private shoppingService: ShoppingService) {
    console.log("Shopping Component Loaded");
    this.products=this.shoppingService.getProducts();
     this.cart=this.shoppingService.getCart(); 
     this.tab=this.products;         
  }

category(){
  this.c=!this.c;
} 

 ajouter(p:Product){
         this.shoppingService.ajouter(p);
      
 }
 substract(p:Product){
  this.shoppingService.substract(p);
 }

tab : Product[]=[]
show_products(c:String){
if(c==='tous'){
   this.tab=this.products;
  }
else{
  this.tab=this.shoppingService.show_products(c)
  }
}
}

