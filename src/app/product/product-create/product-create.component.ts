import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(
    private productsvc: ProductService,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  save(): void {
    this.product.vendorId = +this.product.vendorId
    console.log("Before create", this.product);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.log("Create successful ");
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err)
      }
    );
  }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => {
        console.log(res);
        this.vendors = res;
      },
      err => {
        console.error(err)
      }
    )
  }

}
