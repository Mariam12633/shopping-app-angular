import { Component , EventEmitter, Input,Output} from '@angular/core';
import {ShoppingCart} from '../Modules/shoppingCart';
import { ShoppingCartItem } from '../Modules/ShoppingCartItem';
import { Product } from '../Modules/produit';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{ ShoppingService} from '../services/shopping-service'
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panier',
  imports: [CommonModule,RouterLink],
  standalone:true,
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
cart=new ShoppingCart();
constructor(private routeur:ActivatedRoute , private ShoppingService:ShoppingService){}
ngOnInit(){
  this.cart=this.ShoppingService.getCart();
}
ajouter(p:Product){
this.ShoppingService.ajouter(p);
}
substract(p:Product){
this.ShoppingService.substract(p);
}
}
