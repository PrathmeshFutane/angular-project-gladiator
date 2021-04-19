import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Login } from '../appmodel/login';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  login: Login = new Login();
  email: string;
  password: string;
  message: string;
  rememberMe: boolean;

  constructor(private adminService: AdminService, private router: Router) { }

  loginCheck() {
   console.log(this.login);
   this.adminService.login(this.login).subscribe(response => {
     alert(JSON.stringify(response));
     console.log(response);
     if(response.status == true) {
       let adminId = response.id;
       sessionStorage.setItem('adminId', String(adminId));
       this.router.navigate(['admin-homepage']);
     }
     else
     this.message = response.message;
   })
   
  }
}
  
