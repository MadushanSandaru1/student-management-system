import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StudentService {
  constructor(
    public http: HttpClient
  ) {
  }

  addHeader(): any {
    let header = localStorage.getItem('token');
    if (header && header != '') {
      return {
        'Authorization':header
      }
    }
    return {}
  }

  login(email: string, password: string) {
    return this.http.post('http://student-api.treinetic.xyz/api/v1.0/user/login', {
      'email': email,
      'password': password
    }, {
      observe: 'response',
      headers: this.addHeader()
    });
  }

  addStudent(name:string, email:string, age:string) {
    return this.http.post('http://student-api.treinetic.xyz/api/v1.0/student', {
      'name': name,
      'email': email,
      'age': age
    }, {
      observe: 'response',
      headers: this.addHeader()
    });
  }

  getAllStudent() {
    return this.http.get('http://student-api.treinetic.xyz/api/v1.0/student', {
      observe: 'response',
      headers: this.addHeader()
    });
  }

  updateStudent(id:string, name:string, email:string, age:string) {
    return this.http.put('http://student-api.treinetic.xyz/api/v1.0/student/'+id, {
      'name': name,
      'email': email,
      'age': age
    }, {
      observe: 'response',
      headers: this.addHeader()
    });
  }

  deleteStudent(id:string) {
    return this.http.delete('http://student-api.treinetic.xyz/api/v1.0/student/'+id,{
      observe: 'response',
      headers: this.addHeader()
    });
  }

}
