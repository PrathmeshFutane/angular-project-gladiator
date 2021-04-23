import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { RetailerService } from '../retailer.service';

@Component({
    selector: 'retailer',
    templateUrl: './retailer.component.html',
    styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {



    login: Login = new Login();

    ngOnInit(): void {
    }


    rememberMe: string;
    message: string;

    constructor(private retailerService: RetailerService, private router: Router) { }

    //this is login for retailer
    loginCheck() {
        console.log(this.login);
        this.retailerService.login(this.login).subscribe(response => {
            alert(JSON.stringify(response));
            console.log(response);
            if (response.status == true) {
                let id = response.id;
                alert(response.id);
                sessionStorage.setItem('retailerId', id);
                this.router.navigate(['retailer-homepage']);
                sessionStorage.setItem("retailerName", response['name'])
            }
            else
                this.message = response.message;
        })
    }

    //made change


}
