import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('retailerId') == undefined || sessionStorage.getItem('retailerId') == null || sessionStorage.getItem('retailerId') == "" || sessionStorage.length == 0) {
      this.router.navigate(['admin'])
    }
  }

}
