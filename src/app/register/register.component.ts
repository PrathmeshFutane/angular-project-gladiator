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
  Customer
} from '../appmodel/customer';
import {
  CartServiceService
} from '../cart-service.service';
import {
  CustomerService
} from '../customer.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  customer: Customer = new Customer();
  confirmPassword: string;
  cart: Cart = new Cart();

  constructor(private customerService: CustomerService, private router: Router, private cartService: CartServiceService) {}

  register() {
    if (this.customer.password == this.confirmPassword) {
      alert(JSON.stringify(this.customer));
      this.customerService.register(this.customer).subscribe(response => {
        alert(JSON.stringify(response));
        if (response.status == true) {
          sessionStorage.setItem('customerId', response.registeredCustomerId);

          //to create cart
          if (sessionStorage.getItem("registeredCartId") == undefined) {
            this.cart.customer.customerId = parseInt(sessionStorage.getItem('customerId'));
            alert(JSON.stringify(this.cart));
            this.cartService.createCart(this.cart).subscribe(data => {
              alert(JSON.stringify(data));
              sessionStorage.setItem("registeredCartId", data['registeredCartId'])
            })
          } else {
            alert(sessionStorage.getItem("registeredCartId") + " cart already exist")
          }
          //end of cart

          this.router.navigate(['login']);
        }
      })
    } else {
      alert("password doesnot match")
    }

  }


}
