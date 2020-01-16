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
import { catchError, tap } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProductsService {
  public serviceUrl: string = globals.dbhosturl;

  constructor(private http: HttpClient, private toastrService: ToastrService) {}
  getProducts(): Observable<any> {
    return this.http.get<any>(this.serviceUrl + "admin/products").pipe(
      tap(_ => this.log("fetched Products")),
      catchError(this.handleError("getProducts", []))
    );
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  addProduct(product): Observable<any> {
    return this.http
      .post<any>(this.serviceUrl + "admin/products", product)
      .pipe(
        tap((prod: any) =>
        console.log(`Added Product Successefully`)
        ),
        catchError(this.handleError<any>("addProduct"))
      );
  }

  private log(message: string) {
    console.log(message);
  }
}
