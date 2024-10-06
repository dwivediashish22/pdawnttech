import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

url: string='http://localhost:8080/giftandearn/savequery';

constructor(public http:HttpClient) { }

    saveQuery(college:any):Observable<any>{
      return this.http.post<any>(`${this.url}`,college)
    }




}
