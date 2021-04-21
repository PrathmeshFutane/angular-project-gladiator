import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminComponent } from './admin/admin.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { CheckingComponent } from './checking/checking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompareComponent } from './compare/compare.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RetailerHomepageComponent } from './retailer-homepage/retailer-homepage.component';
import { RetailerRegisterComponent } from './retailer-register/retailer-register.component';
import { RetailerComponent } from './retailer/retailer.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SuccessComponent } from './success/success.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'retailer', component: RetailerComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'retailer-register', component: RetailerRegisterComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'cart', component: CartComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'admin-homepage', component: AdminHomepageComponent },
  { path: 'checking', component: CheckingComponent },
  { path: 'retailer-homepage', component: RetailerHomepageComponent },
  { path: 'admin-add-category', component: AdminAddCategoryComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'bank-details', component: BankDetailsComponent},
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
