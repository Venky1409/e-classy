import { Component, OnInit } from "@angular/core";
import { SubCategoryService } from "../services/subcategories.service";
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
import { ErrorStateMatcher } from "@angular/material/core";

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
  selector: "app-sub-categories",
  templateUrl: "./sub-category.component.html",
  styleUrls: ["./sub-category.component.css"]
})
export class SubCategoriesComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  constructor(
    private _formBuilder: FormBuilder,
    private api: SubCategoryService,
    private toastrService: ToastrService
  ) {}
  loading: boolean = false;
  isLoadingResults = false;
  subCategoryFormGroup: FormGroup;
  categories: any;
  subcategories: any;
  selectedSubCategory: any;
  ngOnInit() {
    console.log("categories", this.api.getCategories());
    this.loadCategories();

    this.subCategoryFormGroup = this._formBuilder.group({
      categoryid: [null, Validators.required],
      subcategoryname: ["", Validators.required]
    });
    this.loading = true;
    this.toastrService.success("Welcome to Sub-Category Page");

    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  editField: string;

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addSubCategory(this.subCategoryFormGroup.value).subscribe(
      (res: any) => {
        const id = res._id;
        console.log("respose ", res);
        this.isLoadingResults = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
  onCategorySelection(categoryId) {
    console.log("am here", categoryId);
    this.selectedSubCategory = categoryId;
    this.loadSubCategories(categoryId);
  }
  deleteSubCategory(id: any) {
    this.api.deleteSubCategory(id).subscribe(
      res => {
        console.log("category deleted successfully");
        this.loadSubCategories(this.selectedSubCategory);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
  private loadCategories() {
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
  }
  private loadSubCategories(categoryId) {
    this.api.getSubCategories(categoryId).subscribe(
      (res: any) => {
        console.log("subcategories list response", res);
        const id = res._id;
        this.subcategories = res.data;
        this.isLoadingResults = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
