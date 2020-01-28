import { Component, OnInit } from "@angular/core";
import { SubChildCategoryService } from "../services/subchildcategories.service";
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
  selector: "app-sub-child-categories",
  templateUrl: "./sub-child-category.component.html",
  styleUrls: ["./sub-child-category.component.css"]
})
export class SubChildCategoriesComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  constructor(
    private _formBuilder: FormBuilder,
    private api: SubChildCategoryService,
    private toastrService: ToastrService
  ) {}
  loading: boolean = false;
  isLoadingResults = false;
  subChildCategoryFormGroup: FormGroup;
  categories: any;
  subcategories: any;
  subchildcategories: any;
  selectedSubCategory: any;
  selectedSubChildCategory: any;
  ngOnInit() {
    this.loadCategories();

    this.subChildCategoryFormGroup = this._formBuilder.group({
      categoryid: [null, Validators.required],
      subcategoryid: [null, Validators.required],
      subchildcategoryname: ["", Validators.required]
    });
    this.loading = false;
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
    this.api
      .addSubChildCategory(this.subChildCategoryFormGroup.value)
      .subscribe(
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
    this.selectedSubCategory = categoryId;
    this.loadSubCategories(categoryId);
  }
  onSubCategorySelection(subcategoryid) {
    this.selectedSubChildCategory = subcategoryid;
    this.loadSubChildCategories(subcategoryid);
  }
  updateSubChildCategory(id: number, property: string, event: any) {
    console.log("id", id, "event", event);
    const editField = event.target.textContent;
    this.api.updateSubChildCategory(id, property, editField).subscribe(
      (res: any) => {
        const id = res._id;
        console.log("id", id);
        console.log("sub child category updated successfully");
        this.isLoadingResults = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
  deleteSubChildCategory(id: any) {
    this.api.deleteSubChildCategory(id).subscribe(
      res => {
        console.log("sub child category deleted successfully");
        this.loadSubChildCategories(this.selectedSubChildCategory);
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
        console.log("categories response", res);
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
  private loadSubChildCategories(subcategoryid) {
    this.api.getSubChildCategories(subcategoryid).subscribe(
      (res: any) => {
        console.log("subcategories list response", res);
        const id = res._id;
        this.subchildcategories = res.data;
        this.isLoadingResults = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
