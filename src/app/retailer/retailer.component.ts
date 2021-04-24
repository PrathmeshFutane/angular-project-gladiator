import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Login } from '../appmodel/login';
import { RetailerService } from '../retailer.service';

@Component({
    selector: 'retailer',
    templateUrl: './retailer.component.html',
    styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {



    login: Login = new Login();




    rememberMe: string;
    message: string;

    constructor(private retailerService: RetailerService, private router: Router) { }
    ngOnInit(): void {

    }

    //this is login for retailer
    loginCheck() {
        console.log(this.login);
        this.retailerService.login(this.login).subscribe(response => {
            //alert(JSON.stringify(response));
            console.log(response);
            if (response.status == true) {
                Swal.fire(
                    'welcome to webrash',
                    'online shopping website',
                    'success'
                )
                let id = response.id;
                //alert(response.id);
                sessionStorage.setItem('retailerId', id);
                this.router.navigate(['retailer-homepage']);
                sessionStorage.setItem("retailerName", response['name'])
                sessionStorage.setItem("approvalStatus", response['approvalStatus'])
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

    //made change


}
