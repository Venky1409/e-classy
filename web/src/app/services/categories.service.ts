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
export class CategoryService {
  public serviceUrl: string = globals.dbhosturl;

  constructor(private http: HttpClient) {}

  postData(data): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.post(this.serviceUrl + "post", data).subscribe(
      res => {
        result.next(res);
      },
      err => {
        result.error(err);
      }
    );
    return result;
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.serviceUrl + "admin/categories").pipe(
      tap(_ => this.log("fetched Categories")),
      catchError(this.handleError("getCategories", []))
    );
  }

  getData(): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.get(this.serviceUrl + "get").subscribe(
      res => {
        result.next(res);
      },
      err => {
        result.error(err);
      }
    );
    return result;
  }

  addCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(this.serviceUrl + "admin/categories", category)
      .pipe(
        tap((prod: Category) =>
          console.log(`added category w/ id=${category.id}`)
        ),
        catchError(this.handleError<Category>("addCategory"))
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
