import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Login/login.component";
import {DashboardComponent} from "./Dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path : 'Login', component: LoginComponent },
  { path : 'Dash', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
