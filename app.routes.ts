import { Routes } from '@angular/router';
import { Shopping } from './shopping/shopping'
import { ProductDetails } from './product-details/product-details';
import { Panier } from './panier/panier';
import{Users} from './users/users'
import{UserLogIn} from './user-log-in/user-log-in'
export const routes: Routes = [
  {path: 'shopping', component: Shopping },
  {path:'product-details/:id' , component :  ProductDetails},
  {path:'panier' , component : Panier },
  {path:'users',component: Users},
  {path:'user-log-in',component:UserLogIn},
  {path:'',component:Users ,pathMatch: 'full'}
];
