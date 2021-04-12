import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = []



  constructor(
    private requestsvc: RequestService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
      this.requestsvc.reviewGet(this.sys.loggedInUser.id).subscribe(
        res => {
          console.log(res);
          this.requests = res as Request[];
      },
      err => {
        console.error(err)
      }
      )
    }
  }
