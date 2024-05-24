import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string;
  password: string;

  signup() {
    console.log('Signup clicked!', this.email, this.password);
    // Replace with your actual signup logic (e.g., API call)
  }
}
