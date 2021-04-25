import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../product.service';

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private productService: AddProductService) { }
  data: any;

  ngOnInit() {
    this.productService.displayAllData().subscribe(data => {
      console.log(data);
      // $scope.users = data.users.slice(5, 11);
      this.data = data[Math.floor(Math.random() * data["productName"].length)];
      console.log(data[0]['image'])
    })
  }



}
