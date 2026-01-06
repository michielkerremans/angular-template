import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent {
  response: any;
  loading = false;
  error: string | null = null;

  constructor(private httpService: HttpService, private cdr: ChangeDetectorRef) {}

  getData() {
    console.log('GET request started');
    this.loading = true;
    this.error = null;
    this.response = null;
    this.httpService.getData().subscribe({
      next: (res) => {
        console.log('GET response:', res);
        this.response = res;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('GET error:', err);
        this.error = err.message || 'Error occurred';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  postData() {
    console.log('POST request started');
    this.loading = true;
    this.error = null;
    this.response = null;
    this.httpService.postData({ foo: 'bar' }).subscribe({
      next: (res) => {
        console.log('POST response:', res);
        this.response = res;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('POST error:', err);
        this.error = err.message || 'Error occurred';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
