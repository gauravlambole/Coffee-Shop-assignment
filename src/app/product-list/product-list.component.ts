import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products= [];

  constructor(private _route: Router,private prodservice:ProductServiceService) { }
  ngOnInit(): void {
   this.prodservice.product().subscribe(prodData => this.products = prodData)
  }

  onLogout() {
    localStorage.removeItem('user');
    this._route.navigate(['/login'])
}

}
