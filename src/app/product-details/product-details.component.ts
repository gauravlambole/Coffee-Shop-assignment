import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/services/product/product-service.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product: any;
    productList:any;
    products:any = [];

    constructor(
        private location: Location,
        private prodservice:ProductServiceService
    ) { }

    ngOnInit(): void {
        this.getProductDetails();
    }
    getProductDetails() {
        this.product = this.location.getState();
        // alert(this.product)
    }
    

    // getCartList() {
    //     this.productList = this.prodservice.getCartList();
    //     console.log(this.productList);
    // }
}
