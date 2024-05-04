import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  errorMessages: any[] = [];
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
    const password_confirmation = form.value.password_confirmation;
    const name = form.value.password_confirmation;

    this.http
      .post('http://127.0.0.1:8000/api/register', {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        name: name,
      })
      .subscribe(
        (response: any) => {
          if (response.success) {
            localStorage.setItem('user_token', response.data.token);
            this.router.navigate(['/inquiries']);
          } else {
            const messageObj = response.message;
            this.errorMessages = [];
            for (const key in messageObj) {
              if (messageObj.hasOwnProperty(key)) {
                this.errorMessages.push(`${messageObj[key][0]}`);
              }
            }
          }
        },

        (error) => {
          console.log(error);
        }
      );
  }
}
