import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendinquiries',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './sendinquiries.component.html',
  styleUrl: './sendinquiries.component.css',
})
export class SendinquiriesComponent implements OnInit {
  errorMessages: any[] = [];
  successSubmit = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.errorMessages = [];
    const token = localStorage.getItem('user_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const name = form.value.name;
    const email = form.value.email;
    const phone = form.value.phone;
    const message = form.value.message;

    this.http
      .post(
        'http://127.0.0.1:8000/api/inquries/add',
        {
          email: email,
          phone: phone,
          message: message,
          name: name,
        },
        { headers: headers }
      )
      .subscribe(
        (response: any) => {
          console.log(response);

          if (response.success) {
            this.successSubmit = true;
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
          if (error.status == 401) {
            this.router.navigate(['/login']);
          }
        }
      );
  }
}
