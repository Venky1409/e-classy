import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType
} from "@angular/common/http";
import { globals } from "../config/globals";
import { Observable, Subscription, of } from "rxjs";
import { Subject, throwError as observableThrowError } from "rxjs";
import { Category } from "../categories/category";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class SubCategoryService {
  public serviceUrl: string = globals.dbhosturl;

  constructor(private http: HttpClient) {}
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.serviceUrl + "admin/categories").pipe(
      tap(_ => this.log("fetched Categories")),
      catchError(this.handleError("getCategories", []))
    );
  }
  getSubCategories(id): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.serviceUrl + "admin/subcategories/" + id)
      .pipe(
        tap(_ => this.log("fetched sub Categories")),
        catchError(this.handleError("getSubCategories", []))
      );
  }

  addSubCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(this.serviceUrl + "admin/subcategories", category)
      .pipe(
        tap((prod: Category) =>
          console.log(`added category w/ id=${category.id}`)
        ),
        catchError(this.handleError<Category>("addCategory"))
      );
  }

  updateSubCategory(id: any, categoryname: string, value): Observable<any> {
    const url = `${this.serviceUrl + "admin/categories"}/${id}`;
    const data = { categoryname: value };
    return this.http.put(url, data).pipe(
      tap(_ => console.log(`updated category id=${id}`)),
      catchError(this.handleError<any>("updateCategory"))
    );
  }

  deleteSubCategory(id: any): Observable<Category> {
    const url = `${this.serviceUrl + "admin/subcategories"}/${id}`;
    return this.http.delete<Category>(url).pipe(
      tap(_ => console.log(`deleted sub category id=${id}`)),
      catchError(this.handleError<Category>("deleteCategory"))
    );
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
