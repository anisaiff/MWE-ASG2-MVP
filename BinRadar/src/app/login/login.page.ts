import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Initialize username property
  password: string = ''; // Initialize password property

  constructor(private navCtrl: NavController) {} // Inject NavController

  login() {
    console.log('Login attempted with username:', this.username, 'password:', this.password);

    // Replace with your actual authentication logic here (e.g., API call, local storage)
    // Assuming successful login...
    this.navigateToHome();
  }

  navigateToHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
