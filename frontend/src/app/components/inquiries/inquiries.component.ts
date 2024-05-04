import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Inquiry } from '../../inquiry.model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquiries',
  standalone: true,
  imports: [HttpClientModule, NgFor, CommonModule],
  templateUrl: './inquiries.component.html',
  styleUrl: './inquiries.component.css',
})
export class InquiriesComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  inquiries: Inquiry[] = [];
  toggleMessage(inquiry: Inquiry): void {
    inquiry.expanded = !inquiry.expanded;
  }

  updateStatus(inquiry: Inquiry, status: string): void {
    if (inquiry.id !== null) {
      const token = localStorage.getItem('user_token');
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      this.http
        .put(
          `http://127.0.0.1:8000/api/inquiries/update/${inquiry.id}`,
          {
            status: status,
          },
          { headers: headers }
        )
        .subscribe(
          (response: any) => {
            if (response.success) {
              window.location.reload();
            } else {
            }
          },
          (error) => {}
        );
    } else {
      console.error('Inquiry ID is null');
    }
  }

  ngOnInit(): void {
    const token = localStorage.getItem('user_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get('http://127.0.0.1:8000/api/inquries', { headers: headers })
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.inquiries = response.data;
          }
        },
        (error) => {
          if (error.status == 401) {
            this.router.navigate(['/login']);
          }
          console.log(error.status);
        }
      );
  }
}
