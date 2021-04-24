import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-view-product',
  templateUrl: './retailer-view-product.component.html',
  styleUrls: ['./retailer-view-product.component.css']
})
export class RetailerViewProductComponent implements OnInit {

  constructor(private retailerService: RetailerService){ }
  data: any
  ngOnInit(): void {

    this.retailerService.getProductsByRetailerId(sessionStorage.getItem('retailerId')).subscribe(data => {
      alert(JSON.stringify(data))
      this.data = data;
      console.log('this is total retailer' + data);
      alert(data['retailer']['ownerName'])
    })
  }

}
