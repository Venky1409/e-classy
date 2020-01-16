import { Component } from '@angular/core';
import { ProductsService } from "../services/products.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent {
  constructor(private productService: ProductsService, private toastrService: ToastrService) {}
  loading: boolean = false;
  ngOnInit() {
    this.loading = true;
    this.toastrService.success("Welcome to Products Page");

    this.productService.getProducts().subscribe(
        (res: any) => {
          console.log("response", res);
        },
        (err: any) => {
          console.log(err);
        }
      );

    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

}
