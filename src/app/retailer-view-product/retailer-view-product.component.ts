import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../appmodel/product';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-view-product',
  templateUrl: './retailer-view-product.component.html',
  styleUrls: ['./retailer-view-product.component.css']
})
export class RetailerViewProductComponent implements OnInit {

  constructor(private retailerService: RetailerService, private router: Router) { }
  data: any
  product: Product = new Product();
  ngOnInit(): void {

    this.retailerService.getProductsByRetailerId(sessionStorage.getItem('retailerId')).subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
      console.log('this is total retailer' + data);
      //alert(data['retailer']['ownerName'])

    })

    if (sessionStorage.getItem('retailerId')==undefined) {
      this.router.navigate(['retailer'])
    }
  }



  updateStock(stock, info) {
    //alert(stock + " " + info)
    this.product.productId = info['productId']
    this.product.productName = info['productName']
    this.product.productDescription = info['productDescription']
    this.product.stock = stock
    this.product.image = info['image']
    this.product.unitPrice = info['unitPrice']
    this.retailerService.updateProductStock(this.product).subscribe(data => {
      Swal.fire(
        'Product Updated Successfully',
        'largest shopping website',
        'success'
      )
      //alert(JSON.stringify(data))
    })
  }

}
