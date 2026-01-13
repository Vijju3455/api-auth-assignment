import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'user' && this.password === '1234') {
      localStorage.setItem('token', 'dummy-token');
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
