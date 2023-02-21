import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { ProductServiceService } from '../../services/product/product-service.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products:any = [];
    userDetails : any;

    constructor(
        private _route: Router,
        private prodservice: ProductServiceService,
        private authservice: AuthService
    ) { }

    ngOnInit(): void {
        this.getProductlist();
        this.getUserDetails();
    }

    getUserDetails() {
        this.userDetails = this.authservice.getUser();
    }

    onLogout() {
        localStorage.removeItem('user');
        this._route.navigate(['/login'])
    }

    getProductlist() {
        this.prodservice.product().subscribe(Response => {
            this.products = Response;
            console.log(this.products);
        }, error => {
            // console.log("Error---->", error);

        })
    }

}
