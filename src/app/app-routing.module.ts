import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardGuard } from './guard/route-guard.guard';
import { LoginComponent } from './login/login.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [ 

  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductListComponent, canActivate: [RouteGuardGuard]},
  { path: 'product/product-detail', component: ProductDetailsComponent , canActivate: [RouteGuardGuard]},
  { path: 'cart', component:MyCartComponent , canActivate: [RouteGuardGuard]},
 
  { path: '**', redirectTo: 'login' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
