import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RetailerComponent } from './retailer/retailer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompareComponent } from './compare/compare.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryComponent } from './category/category.component';
import { TrendingComponent } from './trending/trending.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CheckingComponent } from './checking/checking.component';
import { RetailerRegisterComponent } from './retailer-register/retailer-register.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminTotalCustomerComponent } from './admin-total-customer/admin-total-customer.component';
import { AdminTotalRetailerComponent } from './admin-total-retailer/admin-total-retailer.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminAddCarouselComponent } from './admin-add-carousel/admin-add-carousel.component';
import { RetailerHomepageComponent } from './retailer-homepage/retailer-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RetailerComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductsComponent,
    CheckoutComponent,
    CompareComponent,
    PaymentComponent,
    PagenotfoundComponent,
    HomepageComponent,
    CarouselComponent,
    CategoryComponent,
    TrendingComponent,
    CartComponent,
    FooterComponent,
    CheckingComponent,
    RetailerRegisterComponent,
    SearchResultComponent,
    DashboardComponent,
    SuccessComponent,
    ErrorComponent,
    AddProductComponent,
    AdminHomepageComponent,
    AdminTotalCustomerComponent,
    AdminTotalRetailerComponent,
    AdminAddCategoryComponent,
    AdminAddCarouselComponent,
    RetailerHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }