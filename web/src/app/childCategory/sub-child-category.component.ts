import { Component } from '@angular/core';
import { CategoryService } from "../services/categories.service";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sub-child-categories',
  templateUrl: './sub-child-category.component.html',
  styleUrls: ['./sub-child-category.component.css']
})
export class SubChildCategoriesComponent {
  constructor(private categoryService: CategoryService, private toastrService: ToastrService) {}
  loading: boolean = false;
  ngOnInit() {
    this.loading = true;
    this.toastrService.success("Welcome to Sub-Category Page");

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
