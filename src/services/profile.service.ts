import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userData: any;

  api_link:string='http://127.0.0.1:8000/api/auth/';
  constructor(private http:HttpClient) { }

  registerUser(userData: any):Observable<any>{
    return this.http.post(this.api_link + `register/`, userData)
  }

}
