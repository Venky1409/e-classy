import { Component, EventEmitter } from '@angular/core';
import { ProductsService } from "../services/products.service";
import { CategoryService } from "../services/categories.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent {
  constructor(private productService: ProductsService, private categoryService: CategoryService, private toastrService: ToastrService) {}
  loading: boolean = false;
  categories = [];
  subCategories = [];
  categoryId;
  products = [];
  updateProduct: EventEmitter<Event> = new EventEmitter<Event>();
  deleteProduct: EventEmitter<Event> = new EventEmitter<Event>();
  productId;

  title;
  subtitle;
  categoryid;
  subcategoryid;
  price;
  quantity;
  measurements;
  description;

  ngOnInit() {
    this.loading = true;
    this.toastrService.success("Welcome to Products Page");

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

  getProducts(e) {
    let categoryid = e.target.value;
    this.productService.getProducts(categoryid).subscribe(
      (res: any) => {
        this.products = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getSubCategory(id) {
    this.categoryService.getSubCategory(id).subscribe(
      (res: any) => {
        this.subCategories = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updateProductFun() {
    let updatedProduct = {
    "title":  this.title,
    "subtitle": this.subtitle,
    "categoryid": this.categoryid,
    "subcategoryid": this.subcategoryid,
    "price": this.price,
    "quantity": this.quantity,
    "measurements": this.measurements,
    "description": this.description
    }
    if (!this.title || !this.categoryid || !this.subcategoryid || !this.price || !this.description) {
      alert("Please fill out the required fields");
      return;
    }
    this.productService.updateProduct(this.productId, updatedProduct).subscribe(
      (res: any) => {
        this.toastrService.success("Product Updated Successfully");
        let result = this.products.filter(function(data){
          return (data._id == this.productId && data.categoryid == this.categoryId);
        });
        this.products = result;
      },
      (err: any) => {
        console.log(err);
        this.toastrService.error(err);
      }
    );
  }

  deleteProductFun() {
    this.productService.deleteProduct(this.productId).subscribe(
      (res: any) => {
        this.toastrService.success("Product Deleted Successfully");
        let result = this.products.filter(function(data){
          return data._id != this.productId;
        });
        this.products = result;
      },
      (err: any) => {
        console.log(err);
        this.toastrService.error(err);
      }
    );
  }

  openUpdateModal(e: Event, data) {
    this.updateProduct.emit(new Event('open'));
    if (data.categoryid) {
      this.getSubCategory(data.categoryid);
    }
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.categoryid = data.categoryid;
    this.subcategoryid = data.subcategoryid;
    this.price = data.price;
    this.quantity = data.quantity;
    this.measurements = data.measurements;
    this.description = data.description;
  }

  openDeleteModal(e: Event, data) {
    this.deleteProduct.emit(new Event('open'));
    this.productId = data._id;
  }

  onUpdateModalClose(result: {
    action: string,
    initiator: Event
  }) {
    if (result.action == 'cancel') {
      return;
    }
    if (result.action != 'closing') {
      this.updateProductFun();
    }
  }

  onDeleteModalClose(result: {
    action: string,
    initiator: Event
  }) {
    if (result.action == 'cancel') {
      return;
    }
    if (result.action != 'closing') {
      this.deleteProductFun();
    }
  }

  setSubCategory(e) {
    this.subcategoryid = e.target.value;
  }

}
