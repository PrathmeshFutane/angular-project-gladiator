import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  value: string;
  data: any;
  id: number;



  constructor(private http: HttpClient, private router: Router) {
    console.log(this.data)
  }



  search() {
    alert(this.id)
  }

  clearData() {
    sessionStorage.clear();
    this.router.navigate([''])
  }



  ngOnInit(): void {
    let url = "https://jsonplaceholder.typicode.com/todos";
    this.http.get(url).subscribe(response => {
      this.data = response;
      console.log(response);
    })
  }




}
