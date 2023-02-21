import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {


  }

  url = "https://random-data-api.com/api/coffee/random_coffee?size=50";
  product(): Observable<any> {
    return this.http.get(this.url);
  }

  addToCart(data: any) {
    let arr = this.getCartList();
    
    arr.push(data)
    localStorage.setItem("cart", JSON.stringify(arr));
  }

  getCartList() {
    let str =  localStorage.getItem("cart");   
    return str ? JSON.parse("" + str + "") : [];
  }
}
