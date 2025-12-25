import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import{ ShoppingService} from '../services/shopping-service'
import{USER2} from '../Modules/user2'
@Component({
  selector: 'app-users',
  standalone:true,
  imports: [FormsModule ,  CommonModule,RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',

})
export class Users {
Inscrire:boolean=false;
NewtUser:string = "";
Newpassworld:string="";


currentUser:string = "";
passworld:string="";
message:string="";
Users:USER2[]=[];
constructor(private router: Router,private shoppingService: ShoppingService){
   this.Users=this.shoppingService.getUsers();
}

check(){
  const user = this.Users.find(u => u.username === this.currentUser )
  if(!user){
    this.message="nom invalide";
    this.currentUser="";
    this.passworld="";
    return;
  }
  if(this.passworld===user.password){
   this.message = '';
  this.router.navigate(['/shopping']);
  }
  else {
    this.message = 'Mot de passe invalide';
  this.passworld = '';
  }

}
change(){
  this.Inscrire=true;
  this.Inscrire=false;
}
AddUser(){
 
if(this.NewtUser === null || this.NewtUser === '' || this.Newpassworld === undefined || this.Newpassworld === ''){
  if(this.NewtUser === null || this.NewtUser === ''  )
  this.message='Enter nom';
else if( this.Newpassworld === undefined || this.Newpassworld === '')
  this.message='Enter mot de passe';
return;
}
else{
 this.shoppingService.AddUser(this.NewtUser,this.Newpassworld);
   this.router.navigate(['/shopping']);
}
}
}

