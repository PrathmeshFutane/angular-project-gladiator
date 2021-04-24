import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';
import { Login } from '../appmodel/login';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  login: Login = new Login();
  email: string;
  password: string;
  message: string;
  rememberMe: boolean;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    
  }

  loginCheck() {
    console.log(this.login);
    this.adminService.login(this.login).subscribe(response => {
      //alert(JSON.stringify(response));

      console.log(response);
      if (response.status == true) {
        Swal.fire(
          'welcome to webrash',
          'online shopping website',
          'success'
        )
        let adminId = response.id;
        sessionStorage.setItem('adminId', adminId);
        this.router.navigate(['admin-homepage']);
      }
      else
        Swal.fire({
          icon: 'error',
          title: 'invalid email/password',
          text: 'Something went wrong!',
          footer: 'try again'
        })
    })

  }
}

