import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  token = localStorage.getItem('user_token');

  ngOnInit(): void {
    if (this.token) {
      this.router.navigate(['/inquiries']);
    }
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.http
      .post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password,
      })
      .subscribe(
        (response: any) => {
          if (response.success) {
            localStorage.setItem('user_token', response.data.token);
            localStorage.setItem('token_expiry', response.data.token_expiry);
            this.router.navigate(['/inquiries']);
          }
        },

        (error) => {
          console.log(error);
        }
      );
  }
}
