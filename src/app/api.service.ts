import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  



constructor(public http:HttpClient) { }

    saveQuery(college:any):Observable<any>{
      return this.http.post<any>(`${environment.sendquery}`,college)
    }

    subscribeNews(email: string, projectId: number) {
       return this.http.post<any>(`${environment.subsribemail}`+"?email="+email+"&projectId="+projectId,null)
    }

}
