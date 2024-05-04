import { InquiriesComponent } from './components/inquiries/inquiries.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Routes } from '@angular/router';
import { SendinquiriesComponent } from './components/sendinquiries/sendinquiries.component';

export const routes: Routes = [
  { path: 'send', component: SendinquiriesComponent, title: 'Send An Inquiry' },
  { path: 'inquiries', component: InquiriesComponent, title: 'Inquieries' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'login', component: LoginComponent, title: 'Login' },
];
