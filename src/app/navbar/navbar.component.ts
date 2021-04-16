import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  value: string;
  data: any;
  id: number;



  constructor(private http: HttpClient) {
    console.log(this.data)
  }



  search() {
    alert(this.id)
  }



  ngOnInit(): void {
    let url = "https://jsonplaceholder.typicode.com/todos";
    this.http.get(url).subscribe(response => {
      this.data = response;
      console.log(response);
    })
  }




}
