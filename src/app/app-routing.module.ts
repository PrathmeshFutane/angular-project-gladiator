import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminApproveRetailerComponent } from './admin-approve-retailer/admin-approve-retailer.component';
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
import { FinalCheckoutComponent } from './final-checkout/final-checkout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RetailerHomepageComponent } from './retailer-homepage/retailer-homepage.component';
import { RetailerRegisterComponent } from './retailer-register/retailer-register.component';
import { RetailerViewProductComponent } from './retailer-view-product/retailer-view-product.component';
import { RetailerComponent } from './retailer/retailer.component';
import { SearchByKeywordComponent } from './search-by-keyword/search-by-keyword.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SuccessComponent } from './success/success.component';
import { TrendingComponent } from './trending/trending.component';
import { UpdateCustomerProfileComponent } from './update-customer-profile/update-customer-profile.component';
import { ViewOrderItemComponent } from './view-order-item/view-order-item.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { WishlistComponent } from './wishlist/wishlist.component';

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
  { path: 'admin-homepage', component: AdminHomepageComponent },
  { path: 'checking', component: CheckingComponent },
  { path: 'retailer-homepage', component: RetailerHomepageComponent },
  { path: 'admin-add-category', component: AdminAddCategoryComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'bank-details', component: BankDetailsComponent },
  { path: 'search-by-keyword', component: SearchByKeywordComponent },
  { path: 'admin-approve-retailer', component: AdminApproveRetailerComponent },
  { path: 'product-description', component: ProductDescriptionComponent },
  { path: 'update-customer-profile', component: UpdateCustomerProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'final-checkout', component: FinalCheckoutComponent },
  { path: 'retailer-view-product', component: RetailerViewProductComponent },
  { path: 'view-order', component: ViewOrderComponent },
  { path: 'view-order-item', component: ViewOrderItemComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation : 'reload' } ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
