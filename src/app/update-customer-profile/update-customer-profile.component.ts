import { Component, OnInit } from '@angular/core';
import { Customer } from '../appmodel/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer-profile',
  templateUrl: './update-customer-profile.component.html',
  styleUrls: ['./update-customer-profile.component.css']
})
export class UpdateCustomerProfileComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customer: Customer = new Customer();
  ngOnInit(): void {
  }



  updateProfile() {
    alert('updating profile')
    this.customer.customerId = parseInt(sessionStorage.getItem('customerId'))
    alert(this.customer.customerId);
    console.log(this.customer)
    this.customerService.updateProfile(this.customer).subscribe(data => {
      alert(JSON.stringify(data))
      console.log(data)
    })

  }

}
