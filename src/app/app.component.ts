import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopping-website';

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    

    if (sessionStorage.getItem('customerId') != undefined || sessionStorage.getItem('customerId') != "") {
      let id = sessionStorage.getItem('customerId');
      // alert(id);
      // this.productService.addProduct(this.product).subscribe(response => {
      //   alert(JSON.stringify(response));
      // })
    }
    else {
      alert("customer not registered")
    }
  }


  call() {

    Swal.fire('Hello Angular');

  }
}
