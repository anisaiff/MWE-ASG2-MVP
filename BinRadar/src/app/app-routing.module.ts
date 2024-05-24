import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage, SignupPage } from './pages'; // Import your pages

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect root path to login
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  // ... (Add other routes here)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
