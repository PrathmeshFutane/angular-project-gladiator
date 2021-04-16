import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  data: any;
  id: number;

  ngOnInit(): void {
    let url = "https://jsonplaceholder.typicode.com/todos";
    this.http.get(url).subscribe(response => {
      this.data = response;
      console.log(response);
    })
  }
}
