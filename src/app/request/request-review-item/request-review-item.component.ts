import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLines } from 'src/app/request-lines/request-lines.class';
import { RequestLinesService } from 'src/app/request-lines/request-lines.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  reqln: RequestLines
  request: Request
  product: Product

  constructor(
     private route: ActivatedRoute,
     private router: Router,

     private reqlnsvc: RequestLinesService,
     private requestsvc: RequestService,
     private productsvc: ProductService
  ) { }

  approve(): void {
    this.requestsvc.approve(this.request).subscribe(
      res => {
        console.log(res);
        this.refresh();
      },
      err => {
        console.error(err);
      }
    )
  }

  reject(): void {
    this.requestsvc.reject(this.request).subscribe(
      res => {
        console.log(res);
        this.refresh();
      },
      err => {
        console.error(err);
      }
    )

  }

  refresh() {
    let id = this.route.snapshot.params.id
    this.requestsvc.get(+id).subscribe(
      res => {
        console.log(res);
        this.request = res;
      },
      err => {
        console.error(err);
      }

    )
  }

  ngOnInit(): void {
    this.refresh();
  }

}
