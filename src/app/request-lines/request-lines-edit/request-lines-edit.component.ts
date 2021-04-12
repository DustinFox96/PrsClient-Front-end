import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLines } from '../request-lines.class';
import { RequestLinesService } from '../request-lines.service';

@Component({
  selector: 'app-request-lines-edit',
  templateUrl: './request-lines-edit.component.html',
  styleUrls: ['./request-lines-edit.component.css']
})
export class RequestLinesEditComponent implements OnInit {

  reqln: RequestLines = null
  products: Product[] = []


  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private reqlnsvc: RequestLinesService,
    private productsvc: ProductService 
  ) { }

  save(): void {
    this.reqln.productId = +this.reqln.productId
    console.log("Before edit", this.reqln);
    this.reqlnsvc.change(this.reqln).subscribe(
      res => {
        console.log("Edit successful ");
        this.router.navigateByUrl(`/requests/lines/${this.reqln.requestId}`);
      },
      err => {
        console.error(err)
      }
    );
  }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {
        console.error(err)
      }
    )
    let id = this.route.snapshot.params.id;
    this.reqlnsvc.get(+id).subscribe(
      res => {
        console.log("Request:", res)
        this.reqln = res;

      },
      err => {
        console.error(err);
      }
    )
  }
}


