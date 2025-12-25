enum userType{
  Admin,
  Member,
  Guest
}
class USER{
 protected user_ID: number;
  protected first_name: string;
 protected last_name: string;
 protected age: number;
 protected type: userType;

constructor(){
  this.user_ID=Number(prompt("Enter User ID:") || 0);
  this.first_name = prompt("Enter First Name:") || "UNKNOWN";
  this.last_name = prompt("Enter Last Name:") ?? "UNKNOWN";
  this.age=Number(prompt("Enter Age:") || 18); 
  this.type=(prompt("Enter User Type (Admin, Member, Guest):") || "Unknown") as unknown as userType; 
}
fullName(){
console.log(`Full Name: ${this.first_name} ${this.last_name}`);
}
ShowUserType(){
switch(this.type){
  case userType.Admin:
    console.log("User Type: Admin");
    break;
  case userType.Member:
    console.log("User Type: Member");
    break;
  case userType.Guest:
    console.log("User Type: Guest");
    break;
  default:
    console.log("User Type: Unknown");
}
}
}
const user = new USER();
user.fullName();
user.ShowUserType();