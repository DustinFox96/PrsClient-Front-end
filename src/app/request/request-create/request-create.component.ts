import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users: User[] = [];

  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private router: Router,
    private sys: SystemService
  ) { }

  save(): void {
    this.request.userId = +this.request.userId
    console.log("Before create", this.request);
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.log("Create successful ");
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err)
      }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.request.userId = this.sys.loggedInUser.id;
 
    
  }                                                                           
  

}
