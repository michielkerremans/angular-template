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
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1');
  }

  postData(data: Record<string, unknown>): Observable<any> {
    // Example public API
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', data);
  }
}
