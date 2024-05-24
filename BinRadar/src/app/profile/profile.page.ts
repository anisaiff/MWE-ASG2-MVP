import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  logout() {
    // Implement your logout logic here (navigation, service call, etc.)
    console.log('Logging out...');
    // Maybe navigate back to login or another page
    // this.navCtrl.navigateBack('/login');
  }
}
