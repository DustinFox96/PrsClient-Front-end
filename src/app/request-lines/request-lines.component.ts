import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Request } from '../request/request.class';
import { RequestService } from '../request/request.service';
import { RequestLines } from '../request-lines/request-lines.class';
import { RequestLinesService } from '../request-lines/request-lines.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  reqln: RequestLines = null;
  request: Request = null;
  product: Product = null;


  constructor(
    private reqlnsvc: RequestLinesService,
    private requestsvc: RequestService,
    private productsvc: ProductService,

    private route: ActivatedRoute,
    private router: Router
  ) { }

  reviewStatus(): void {
    this.requestsvc.review(this.request).subscribe(
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

  delete(reqln: RequestLines): void {
    this.reqlnsvc.remove(reqln).subscribe(
      res => {
        console.log("Delete was successful!");
        this.refresh();
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
