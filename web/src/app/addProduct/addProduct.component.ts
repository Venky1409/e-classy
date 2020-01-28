import { Component, EventEmitter } from '@angular/core';
import { CategoryService } from "../services/categories.service";
import { ProductsService } from "../services/products.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-products',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class AddProductsComponent {
  constructor(private categoryService: CategoryService, private productService: ProductsService, private toastrService: ToastrService) {}
  loading: boolean = false;
  categories: any = [];
  subCategories: any = [];
  subChildCategories: any = [];
  title;
  subtitle;
  categoryid;
  subcategoryid;
  subchildcategoryid;
  price;
  quantity;
  measurements;
  description;

  ngOnInit() {
    this.loading = false;
    this.toastrService.success("Welcome to Add-Product Page");

    this.categoryService.getCategories().subscribe(
      (res: any) => {
        this.categories = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );

    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  setCategory(e) {
    this.categoryid = e.target.value;
    this.categoryService.getSubCategory(e.target.value).subscribe(
      (res: any) => {
        this.subCategories = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  setSubCategory(e) {
    this.subcategoryid = e.target.value;
    this.categoryService.getSubChildCategory(e.target.value).subscribe(
      (res: any) => {
        this.subChildCategories = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  setSubChildCategory(e) {
    this.subchildcategoryid = e.target.value;
  }

  submitForm() {
    const data = {
      "title": this.title,
      "subtitle": this.subtitle,
      "categoryid": this.categoryid,
      "subcategoryid": this.subcategoryid,
      "subchildcategoryid": this.subchildcategoryid,
      "price": this.price,
      "quantity": this.quantity,
      "measurements": this.measurements,
      "description": this.description
    }
    if (!this.title || !this.categoryid || !this.subcategoryid || !this.price || !this.description) {
      alert("Please fill out the required fields");
      return;
    }
    this.productService.addProduct(data).subscribe(
      (res: any) => {
        console.log("response", res);
        this.toastrService.success("Added Product Sucessfully");
        this.title = undefined;
        this.subtitle = undefined;
        this.categoryid = undefined;
        this.subcategoryid = undefined;
        this.subchildcategoryid = undefined;
        this.price = undefined;
        this.quantity = undefined;
        this.measurements = undefined;
        this.description = undefined;
      },
      (err: any) => {
        console.log(err);
        this.toastrService.error(err);
      }
    );
  }

}
