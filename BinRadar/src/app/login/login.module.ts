import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For form handling (optional)
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Add if necessary
    IonicModule // Import IonicModule here
  ],
  declarations: [LoginPage],
  exports: [LoginPage] // If you intend to use LoginPage in other components
})
export class LoginModule { }
