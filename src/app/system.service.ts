import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = null
 

  chkLogin(): void {
    if(this.loggedInUser == null) {
      this.router.navigateByUrl("/login");
      console.warn("check for login disabled!");
    }
  }

  
  constructor(
    private router: Router
  ) { }
}
