import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//---------------------------------------------------------------------------------------------------------------------
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
//---------------------------------------------------------------------------------------------------------------------
import { UserListComponent } from './user/user-list/user-list.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent} from './user/user-login/user-login.component';
import { SearchUserPipe} from './search-user.pipe';
//---------------------------------------------------------------------------------------------------------------------
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { SearchVendorPipe } from './search-vendor.pipe';
//---------------------------------------------------------------------------------------------------------------------
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
//---------------------------------------------------------------------------------------------------------------------
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
//---------------------------------------------------------------------------------------------------------------------
import { RequestLinesComponent } from './request-lines/request-lines.component';
import { RequestLinesCreateComponent } from './request-lines/request-lines-create/request-lines-create.component';
import { RequestLinesEditComponent } from './request-lines/request-lines-edit/request-lines-edit.component';


@NgModule({
  declarations: [
// -------------------------------------------------
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
// -------------------------------------------------
    UserListComponent,
    BoolDisplayPipe,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    UserLoginComponent,
    SearchUserPipe,
// -------------------------------------------------
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    SearchVendorPipe,
// -------------------------------------------------
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
// -------------------------------------------------
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestReviewListComponent,
    RequestReviewItemComponent,
// -------------------------------------------------
    RequestLinesComponent,
    RequestLinesCreateComponent,
    RequestLinesEditComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
