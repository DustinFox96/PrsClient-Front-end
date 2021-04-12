import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request = null
  users: User[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private requestsvc: RequestService,
    private usersvc: UserService 
  ) { }

  save(): void {
    this.request.userId = +this.request.userId
    console.log("Before edit", this.request);
    this.requestsvc.change(this.request).subscribe(
      res => {
        console.log("Edit successful ");
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err)
      }
    );
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => {
        console.log(res);
        this.users = res;
      },
      err => {
        console.error(err)
      }
    )
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(+id).subscribe(
      res => {
        console.log("Request:", res)
        this.request = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
