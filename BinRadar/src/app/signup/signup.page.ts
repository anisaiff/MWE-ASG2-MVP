import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  constructor(private router: Router) {}

  signUp() {
    // Implement your sign-up logic here
    console.log('User signed up');
    // Navigate to the home page after successful sign-up
    this.router.navigate(['/home']);
  }
}
