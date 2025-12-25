import { Component } from '@angular/core';
import{ ShoppingService} from '../services/shopping-service'
import{USER2} from '../Modules/user2'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-log-in',
   standalone:true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './user-log-in.html',
  styleUrl: './user-log-in.css',
})
export class UserLogIn {
  Inscrire:boolean=false;
NewtUser:string = "";
Newpassworld:string="";
message:string="";
Users:USER2[]=[];
 constructor(private shoppingService: ShoppingService,private router: Router){
  this.Users=this.shoppingService.getUsers();
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
