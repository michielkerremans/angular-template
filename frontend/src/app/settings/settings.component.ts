import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  formData: any;
  username: string = '';
  email: string = '';
  notifications: boolean = false;

  ngOnInit() {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    if (savedUsername) this.username = savedUsername;
    if (savedEmail) this.email = savedEmail;
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.formData = form.value;
      localStorage.setItem('username', form.value.username);
      localStorage.setItem('email', form.value.email);
    }
  }
}
