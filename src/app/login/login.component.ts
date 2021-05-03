import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Cart
} from '../appmodel/cart';
import {
  Login
} from '../appmodel/login';
import {
  CartServiceService
} from '../cart-service.service';
import {
  CustomerService
} from '../customer.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  message: string;
  rememberMe: boolean;

  constructor(private customerService: CustomerService, private router: Router, private cartService: CartServiceService) { }
  cart: Cart = new Cart();


  loginCheck() {
    console.log(this.login);
    this.customerService.login(this.login).subscribe(response => {
      //alert(JSON.stringify(response));

      sessionStorage.setItem("customerName", response['name'])
      console.log(response);
      sessionStorage.setItem('registeredCartId', response['cartId']);
      if (response.status == true) {
        let customerId = response.id;
        sessionStorage.setItem('customerId', String(customerId));
        Swal.fire(
          'welcome to webrash',
          'online shopping website',
          'success'
        )
        this.router.navigate(['products']);
      } else
        Swal.fire({
          icon: 'error',
          title: 'invalid email/password',
          text: 'Something went wrong!',
          footer: 'try again'
        })
      setInterval(function () { location.reload(); }, 1500);

    })



  }

}



//code for future reference
//to create cart
// if (sessionStorage.getItem("registeredCartId") == undefined) {
//   this.cart.customer.customerId = parseInt(sessionStorage.getItem('customerId'));
//   alert(JSON.stringify(this.cart));
//   this.cartService.createCart(this.cart).subscribe(data => {
//     alert(JSON.stringify(data));
//     sessionStorage.setItem("registeredCartId", data['registeredCartId'])
//   })
// } else {
//   alert(sessionStorage.getItem("registeredCartId") + " cart already exist")

// }
// //end of cart
