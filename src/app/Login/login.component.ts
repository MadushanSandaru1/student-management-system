import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {StudentService} from "../Service/student.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  isLoading: boolean = false;
  email: string = '';
  password: string = '';
  error_msg: string = '';


  constructor(
    public router: Router,
    private studentService: StudentService
  ) {
    if (localStorage.getItem('logged_user_name') !== null) {
      this.router.navigate(['./Dash']);
    }
  }

  login() {
    this.isLoading = true;
    if (this.email.trim() != '' && this.password.trim() != '') {
      this.studentService.login(this.email, this.password).subscribe((response)=>{
        this.isLoading = false;
        this.error_msg = '';
        this.saveToken(response);
        this.router.navigate(['./Dash']);
      }, (error)=>{
        this.isLoading = false;
        this.error_msg = error.error.message;
      });
    } else {
      this.error_msg = "Please fill all fields";
    }
  }

  saveToken(response: any) {
    localStorage.setItem('token', response.headers.get('Authorization'));
    localStorage.setItem('logged_user_name', response.body.name);
    localStorage.setItem('logged_user_email', response.body.email);
    localStorage.setItem('logged_user_age', response.body.age);
  }

}
