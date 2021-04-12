import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLines } from '../request-lines.class';
import { RequestLinesService } from '../request-lines.service';

@Component({
  selector: 'app-request-lines-create',
  templateUrl: './request-lines-create.component.html',
  styleUrls: ['./request-lines-create.component.css']
})
export class RequestLinesCreateComponent implements OnInit {

  requestline: RequestLines = new RequestLines();
  products: Product[] = [];

  constructor(
    private reqln: RequestLinesService,
    private productsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    save(): void {
      this.requestline.productId = +this.requestline.productId;
      console.log("Before create", this.requestline);
      this.reqln.create(this.requestline).subscribe(
        res => {
          console.log("Create successful ");
          this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
        },
        err => {
          console.error(err)
        }
      );
    }

  ngOnInit(): void {
    this.requestline.requestId = +this.route.snapshot.params.rid;
    this.productsvc.list().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
