import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-shop',


  templateUrl: './shop.component.html',

})
export class ShopComponent{
  products: any= [];
  limit: number = 20;
  constructor(private http:HttpClient) {
  }

  ngOnInit(){
    this.getProducts();

  }

  getProducts(){
    const url='https://dummyjson.com/products/category/laptops?limit='+this.limit;
    this.http.get<any>(url).subscribe(data=>{
      this.products = data.products;
    })

  }

}
