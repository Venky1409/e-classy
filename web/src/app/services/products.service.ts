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
  getProducts(id): Observable<any> {
    return this.http.post<any>(this.serviceUrl + "admin/getproducts", id)
    .pipe(
      tap((prod: any) =>
      console.log(`Fetch Products Successefully`)
      ),
      catchError(this.handleError<any>("Fetch Products"))
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
  deleteProduct(id: any): Observable<any> {
    const url = `${this.serviceUrl + "admin/products"}/${id}`;
    return this.http.delete<any>(url).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>("deleteProduct"))
    );
  }

  updateProduct(id, data): Observable<any> {
    const url = `${this.serviceUrl + "admin/products"}/${id}`;
    return this.http.put(url, data).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>("updateProduct"))
    );
  }

  private log(message: string) {
    console.log(message);
  }
}
