// src/app/login/login.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Initialize username property
  password: string = ''; // Initialize password property

  constructor(private navCtrl: NavController, private router: Router) {}

  login() {
    // Perform your authentication logic here
    // For example, checking hardcoded credentials (for demonstration purposes)
    if (this.username === 'user' && this.password === 'password') {
      // Navigate to the home page
      this.router.navigate(['/home.page.html']);
    } else {
      // Handle invalid credentials
      console.log('Invalid credentials');
    }
  }
}
