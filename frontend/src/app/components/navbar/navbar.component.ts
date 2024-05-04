import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  token_expiry: string | null = null;
  ngOnInit(): void {
    this.token_expiry = localStorage.getItem('token_expiry');
    if (this.token_expiry) {
      const tokenExpiryMilliseconds = parseInt(this.token_expiry, 10) * 1000;
      const currentTimeMilliseconds = new Date().getTime();

      if (currentTimeMilliseconds > tokenExpiryMilliseconds) {
        localStorage.removeItem('token_expiry');
        localStorage.removeItem('user_token');
      }
    }
  }
}
