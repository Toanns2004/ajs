import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";
import {ProductComponent} from "./product/product.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import { HttpClientModule} from "@angular/common/http";
import {ShopComponent} from "./shop/shop.component";
import {SearchComponent} from "./search/search.component";
import {FormsModule} from "@angular/forms";



//1.Khai báo danh sách các routing
const appRoutes: Routes= [
  { path: '',component: HomeComponent},
  { path: 'category',component: CategoryComponent},
  { path: 'product/: id',component: ProductComponent},
  {path: 'login' ,component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'shop' ,component: ShopComponent},
  {path: 'search',component:SearchComponent},
]
@NgModule({
  declarations: [
    AppComponent, HomeComponent, CategoryComponent, ProductComponent,
    LoginComponent,RegisterComponent,ShopComponent,SearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
