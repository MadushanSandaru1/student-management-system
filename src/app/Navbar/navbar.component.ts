import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {DashboardComponent} from "../Dashboard/dashboard.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  logged_user_name: string = '';
  logged_user_age: string = '';
  logged_user_email: string = '';

  constructor(
    public router: Router
  ) {
    // @ts-ignore
    this.logged_user_name = localStorage.getItem('logged_user_name');
    // @ts-ignore
    this.logged_user_email = localStorage.getItem('logged_user_email');
    // @ts-ignore
    this.logged_user_age = localStorage.getItem('logged_user_age');
  }

  logout() {
    if (confirm("Are you sure to logout?")) {
      localStorage.clear();
      this.router.navigate(['./Login']);
    }
  }
}
