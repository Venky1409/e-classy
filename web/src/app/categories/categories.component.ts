import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../services/categories.service";
import { ToastrService } from "ngx-toastr";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupDirective,
  ValidatorFn,
  NgForm,
  AbstractControl,
  NgModel,
  FormArray,
  ValidationErrors
} from "@angular/forms";
import { Category } from "./category";
import { ErrorStateMatcher } from "@angular/material/core";
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  constructor(
    private _formBuilder: FormBuilder,
    private api: CategoryService,
    private toastrService: ToastrService
  ) {}
  loading: boolean = false;
  loginFormGroup: FormGroup;
  isLoadingResults = false;
  categories: any;
  ngOnInit() {
    console.log("categories", this.api.getCategories());
    this.api.getCategories().subscribe(
      (res: any) => {
        console.log("response", res);
        const id = res._id;
        this.categories = res.data;
        this.isLoadingResults = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
    this.loginFormGroup = this._formBuilder.group({
      categoryname: [null, Validators.required]
    });
    this.loading = true;
    this.toastrService.success("Welcome to Category Page");

    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  deleteCategory(id: any) {
    this.api.deleteCategory(id).subscribe(
      res => {
        console.log("category deleted successfully");
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  updateCategory(id: number, property: string, event: any) {
    console.log("id", id, "event", event);
    const editField = event.target.textContent;
    this.api.updateCategory(id, property, editField).subscribe(
      (res: any) => {
        const id = res._id;
        console.log("id", id);
        console.log("category updated successfully");
        this.isLoadingResults = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addCategory(this.loginFormGroup.value).subscribe(
      (res: any) => {
        const id = res._id;
        console.log("id", id);
        this.isLoadingResults = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
