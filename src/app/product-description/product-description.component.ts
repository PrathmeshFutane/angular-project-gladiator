import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import Swal from 'sweetalert2';
import {
  CartItem,
  Product
} from '../appmodel/cartItem';
import {
  CartItemService
} from '../cart-item.service';
import {
  AddProductService
} from '../product.service';
import {
  SharedService
} from '../shared.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private router: Router, private cartItemService: CartItemService, private productService: AddProductService, private sharedService: SharedService) { }

  data: any;

  quantity: any;
  id: number;
  products: Product[];
  searchValue: any;
  obj = [];
  obj2 = [];
  isDataLoaded = false;

  cartItem: CartItem = new CartItem();


  addToCart(productInformation) {
    //create cart on page load for customer
    //alert(productInformation['productId'] + " " + productInformation['productName'] + " " + productInformation['productDescription'] + " " + this.id + " " + productInformation['unitPrice'])
    if (sessionStorage.getItem('customerId')) {
      this.cartItem.cart.cartId = parseInt(sessionStorage.getItem('registeredCartId'));
      this.cartItem.product.productId = productInformation['productId'];
      this.cartItem.quantity = 1;

      //code to send data to database
      this.cartItemService.addToCart(this.cartItem).subscribe(data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Item Added To Cart',
          showConfirmButton: false,
          timer: 1000
        })
        //alert(JSON.stringify(data))
      })
    }
    else {
      this.router.navigate(['login'])
    }

  }

  ngOnInit(): void {
    this.data = this.sharedService.getProductDescription();
    //alert(JSON.stringify(this.data))
    if (this.data['productName']) {
      this.isDataLoaded = true;
    }
  }


  wishlist(information) {
    //alert(JSON.stringify(information));
    this.obj2.push(information)
    localStorage.setItem("wishlist", JSON.stringify(this.obj2))
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Item added to wishlist'
    })
  }



}
