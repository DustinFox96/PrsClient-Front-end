import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class';
import { RequestLines } from './request-lines.class';

@Injectable({
  providedIn: 'root'
})
export class RequestLinesService {

  baseurl: string = "http://localhost:18916/api/requestlines";

  list(): Observable<RequestLines[]> {
    return this.http.get(this.baseurl) as Observable<RequestLines[]>;
  }
  get(id: number): Observable<RequestLines> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<RequestLines>;
  }
  create(requestLines: RequestLines): Observable<RequestLines> {
    return this.http.post(`${this.baseurl}`, requestLines) as Observable<RequestLines>;
  }
  change(requestLines: RequestLines): Observable<any> {
    return this.http.put(`${this.baseurl}/${requestLines.id}`,requestLines) as Observable<any>;
  }
  remove(requestLines: RequestLines): Observable<RequestLines> {
    return this.http.delete(`${this.baseurl}/${requestLines.id}`) as Observable<RequestLines>
  }
  //  review(request: Request): Observable<any> {
  //    return this.http.review()
  //  }

  constructor(
     private http: HttpClient
  ) { }
}
