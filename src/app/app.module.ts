import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginComponent} from "./Login/login.component";
import { AppRoutingModule } from './app-routing.module';
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderComponent} from "./Loader/loader.component";
import {StudentService} from "./Service/student.service";
import {NavbarComponent} from "./Navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
