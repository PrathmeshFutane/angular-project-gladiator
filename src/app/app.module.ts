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
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { RetailerHomepageComponent } from './retailer-homepage/retailer-homepage.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SearchByKeywordComponent } from './search-by-keyword/search-by-keyword.component';
import { AdminApproveRetailerComponent } from './admin-approve-retailer/admin-approve-retailer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderCancelComponent } from './order-cancel/order-cancel.component';
import { UpdateCustomerProfileComponent } from './update-customer-profile/update-customer-profile.component';
import { FinalCheckoutComponent } from './final-checkout/final-checkout.component';
import { RetailerViewProductComponent } from './retailer-view-product/retailer-view-product.component';
import { ViewOrderItemComponent } from './view-order-item/view-order-item.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CodComponent } from './cod/cod.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';


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
    AdminHomepageComponent,
    AdminAddCategoryComponent,
    RetailerHomepageComponent,
    BankDetailsComponent,
    SearchfilterPipe,
    SearchByKeywordComponent,
    AdminApproveRetailerComponent,
    WishlistComponent,
    ProductDescriptionComponent,
    ViewOrderComponent,
    OrderCancelComponent,
    UpdateCustomerProfileComponent,
    FinalCheckoutComponent,
    RetailerViewProductComponent,
    ViewOrderItemComponent,
    ForgotPasswordComponent,
    CodComponent,
    CashOnDeliveryComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
