import { Component } from '@angular/core';
import { CategoryService } from "../services/categories.service";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryService, private toastrService: ToastrService) {}
  loading: boolean = false;
  ngOnInit() {
    this.loading = true;
    this.toastrService.success("Welcome to Category Page");

    setTimeout(() => {
      this.loading = false;
    }, 2500);

    // this.categoryService.getData().subscribe(data => {
    //   if (data) {
    //     console.log(data);
    //   }
    // },
    // error => {
    //   console.log(error);
    //  });
  }

}
