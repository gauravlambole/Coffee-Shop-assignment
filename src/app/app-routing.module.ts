import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [ 

  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductListComponent},
  { path: '**', redirectTo: 'login' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
