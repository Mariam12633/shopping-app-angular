 export class Product{
  private product_id:string;
    product_title:string;
    img:string=" ";
    category:string;
  private product_price:number;
 
  constructor(id:string , title:string , price:number,c:string,image:string){
    this.product_id=id;
    this.product_price=price;
    this.product_title=title;
    this.category=c;
    this.img=image;
  }
   get_id():string{
    return this.product_id;
  }
  get_price():number{
    return this.product_price;
  }

  print_product():void{
    console.log("les informations de produits sont" );
    console.log("prix: "+this.product_price+" id: "+this.product_id+" titre: "+this.product_title);
  }


}
