import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { globals } from '../config/globals';
import { Observable, Subscription } from 'rxjs';
import {Subject, throwError as observableThrowError} from 'rxjs';

@Injectable()
export class CategoryService {
  public serviceUrl: string = globals.dbhosturl;

  constructor(private http: HttpClient) {
  }

  postData(data): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.post(this.serviceUrl + "post", data).subscribe(
    res => {
      result.next(res);
    },
    err => {
      result.error(err);
    });
    return result;
  }

  getData(): Observable<any> {
    const result: Subject<any> = new Subject();
    this.http.get(this.serviceUrl + "get").subscribe(
    res => {
      result.next(res);
    },
    err => {
      result.error(err);
    });
    return result;
  }

}
