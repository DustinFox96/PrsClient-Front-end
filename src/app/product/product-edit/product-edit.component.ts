import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = null
  vendors: Vendor[] = [];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private vendorsvc: VendorService,
    private productsvc: ProductService
  ) { }

  save(): void {
    this.product.vendorId = +this.product.vendorId
    console.log("Before create", this.product);
    this.productsvc.change(this.product).subscribe(
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
    let id = this.route.snapshot.params.id;
    this.productsvc.get(+id).subscribe(
      res => {
        console.log("Product:", res)
        this.product = res;
      },
      err => {
        console.error(err);
      }
    )
  }
}
