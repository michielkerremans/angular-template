import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // Example public API
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  postData(data: any): Observable<any> {
    // Example public API
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
