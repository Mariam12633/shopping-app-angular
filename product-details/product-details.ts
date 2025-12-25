import { Component } from '@angular/core';
import { Product } from '../Modules/produit';
import { ActivatedRoute } from '@angular/router';
import{ ShoppingService} from '../services/shopping-service'
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  standalone:true,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails  {
 product?: Product;
 constructor(private route: ActivatedRoute ,private  ShoppingService: ShoppingService ){}
ngOnInit(){
const id = this.route.snapshot.paramMap.get('id');
if(id){
  this.product=this.ShoppingService.getProducts().find(p =>p.get_id()===id);
}
}
Ajouter(p:Product){
  this.ShoppingService.ajouter(p);
}
}
