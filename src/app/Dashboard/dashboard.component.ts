import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {StudentService} from "../Service/student.service";

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  isLoading: boolean = false;
  isUpdating: boolean = false;
  error_msg: string = '';

  id: string = '';
  name: string = '';
  email: string = '';
  age: string = '';

  studentDetails: any;

  constructor(
    public router: Router,
    private studentService: StudentService
  ) {
    if (localStorage.getItem('logged_user_name') !== null) {
      this.router.navigate(['./Dash']);
    }

    this.getAllStudent();
  }

  addStudent() {
    if (this.name != '' && this.email != '' && this.age != '') {
      this.isLoading = true;
      this.studentService.addStudent(this.name, this.email, this.age).subscribe((response)=>{
        this.isLoading = false;
        this.error_msg = 'Success';
        this.getAllStudent();
      }, (error)=>{
        this.isLoading = false;
        this.error_msg = error.error.message;
      });
    } else {
      this.error_msg = "Please fill all fields";
    }
  }

  cancelAddStudent() {
    this.name = '';
    this.email = '';
    this.age = '';
  }

  getAllStudent() {
    this.isLoading = true;

    this.id = '';
    this.name = '';
    this.email = '';
    this.age = '';

    this.studentService.getAllStudent().subscribe((response)=>{
      this.studentDetails = response.body;
      this.isLoading = false;
    }, (error)=>{
      this.error_msg = error.error_msg.message;
      this.isLoading = false
    })
  }

  readyToUpdateStudent(id:string, name:string, email:string, age:string) {
    this.isUpdating = true;
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }

  updateStudent() {
    if (this.id != '' && this.name != '' && this.email != '' && this.age != '') {
      this.isLoading = true;
      this.studentService.updateStudent(this.id, this.name, this.email, this.age).subscribe((response)=>{
        this.isLoading = false;
        this.isUpdating = false;
        this.error_msg = 'Success';
        this.getAllStudent();
      }, (error)=>{
        this.isLoading = false;
        this.isUpdating = false;
        this.error_msg = error.error.message;
      });
    } else {
      this.error_msg = "Please fill all fields";
    }
  }

  cancelUpdateStudent() {
    this.id = '';
    this.name = '';
    this.email = '';
    this.age = '';
    this.isUpdating = false;
  }

  deleteStudent(id:string) {
    if (confirm("Are you sure to delete?")) {
      this.isLoading = true;
      this.studentService.deleteStudent(id).subscribe((response)=>{
        this.isLoading = false;
        this.error_msg = 'Success';
        this.getAllStudent();
      }, (error)=>{
        this.isLoading = false;
        this.error_msg = error.error.message;
      });
    }
  }

}
