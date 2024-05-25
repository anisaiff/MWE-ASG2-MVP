import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Perform your authentication logic here
    if (this.username === 'user' && this.password === 'password') {
      // Navigate to the home page
      this.router.navigate(['/home']);
    } else {
      // Handle invalid credentials
      console.log('Invalid credentials');
    }
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
