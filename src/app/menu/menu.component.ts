import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: any[] = [

    { display: "Home", route: "/home" },
    { display: "Users", route: "/users/list" },
    { display: "Vendors", route: "/vendors/list" },
    { display: "Products", route: "/products/list" },
    { display: "Request", route: "/requests/list" },
    { display: "Review", route: "/requests/review/list" },
    { display: "About", route: "/about" },
    { display: "Help", route: "/help" },
    { display: "Login", route: "/user/login" }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
