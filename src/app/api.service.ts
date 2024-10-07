import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

sendquery: string='http://localhost:8080/pdawnt/savequery';
subsribemail: string='http://localhost:8080/pdawnt/emailsubscription';

constructor(public http:HttpClient) { }

    saveQuery(college:any):Observable<any>{
      return this.http.post<any>(`${this.sendquery}`,college)
    }

    subscribeNews(email: string, projectId: number) {
       return this.http.post<any>(`${this.subsribemail}`+"?email="+email+"&projectId="+projectId,null)
    }

}
