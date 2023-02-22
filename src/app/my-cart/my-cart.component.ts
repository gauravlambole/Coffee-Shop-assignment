import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/services/product/product-service.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  products: any[] = [];

  constructor(
    private prodservice: ProductServiceService
  ) {

  }

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this.products = this.prodservice.getCartList();
    console.log(this.products);
  }
}
