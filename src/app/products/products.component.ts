import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../product.service';
import { CartItemService } from '../cart-item.service';
import { CartItem, Product } from '../appmodel/cartItem';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cartItemService: CartItemService, private productService: AddProductService, private sharedService: SharedService) { }

  data: any;
  quantity: any;
  id: number;
  products: Product[];
  searchValue: any;
  obj = [];
  obj2 = [];
  page: number = 1;
  totalProducts: string;



  cartItem: CartItem = new CartItem();

  ngOnInit(): void {
    this.productService.displayAllData().subscribe(data => {
      console.log(data);
      this.data = data;
      // this.totalProducts = data
      //console.log(data[0]['image'])
      // console.log(datalength)
      console.log("this " + data['length'])
      this.totalProducts = data['length']
    })

    // this.productService.displayAllData().subscribe((data: Product[]) => {
    //   this.products = data;
    //   this.searchValue = this.sharedService.getSearchValue();
    // })

    // this.productService.getAllQuantity().subscribe(data => {
    //   console.log(data)
    //   this.quantity = data;
    //   this.id = data['total_count']

    // })
  }

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


  //add to compare
  addToCompare(information) {
    this.obj.push(information)
    sessionStorage.setItem("myCompare", JSON.stringify(this.obj))
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Item Added To Compare',
      showConfirmButton: false,
      timer: 1000
    })
  }


  //for wishlist
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





  //code for filter
  from500to1000() {
    //alert('click')
    this.productService.filter500to1000().subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
    })
  }

  from5000to10000() {
    //alert('click')
    this.productService.filter5000to10000().subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
    })
  }


  //code for Ascending 
  ascendingOrder() {
    // alert('click')
    this.productService.ascendingOrder().subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
    })


  }

  //code for descending
  descendingOrder() {
    // alert('click')
    this.productService.descendingOrder().subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
    })

  }


  productDescription(information) {
    this.sharedService.setProductDescription(information)
    this.router.navigate(['product-description'])
  }

}
