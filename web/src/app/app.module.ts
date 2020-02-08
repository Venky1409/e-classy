import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule, ToastContainerModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";
import { SubCategoriesComponent } from "./subCategory/sub-category.component";
import { SubChildCategoriesComponent } from "./childCategory/sub-child-category.component";
import { ProductsComponent } from "./products/product.component";
import { AddProductsComponent } from "./addProduct/addProduct.component";
import { ModalControlComponent } from "./modal/modal-control.component";

import { RouterModule, Routes } from "@angular/router";
import { from } from "rxjs";

import { CategoryService } from "./services/categories.service";
import { SubCategoryService } from "./services/subcategories.service";
import { SubChildCategoryService } from "./services/subchildcategories.service";
import { ProductsService } from "./services/products.service";

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import { TopnavComponent } from './topnav/topnav.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  { path: "", component: LandingComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "subcategories", component: SubCategoriesComponent },
  { path: "childcategories", component: SubChildCategoriesComponent },
  { path: "products", component: ProductsComponent },
  { path: "addProducts", component: AddProductsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    HomeComponent,
    SubCategoriesComponent,
    SubChildCategoriesComponent,
    ProductsComponent,
    AddProductsComponent,
    ModalControlComponent,
    TopnavComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      timeOut: 0, // disable auto-dismiss
      closeButton: true // show close button
    }),
    ToastContainerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [
    CategoryService,
    SubCategoryService,
    SubChildCategoryService,
    ProductsService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
