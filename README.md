# StudentManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## API Details

### Login - POST
```
http://student-api.treinetic.xyz/api/v1.0/user/login
```

```json
{
    "email" : "admin@student.app",
    "password" : "Student@123"
}
```

### Create student - POST
```
http://student-api.treinetic.xyz/api/v1.0/student
```

```json
{

    "name" : "test",
    "email" : "tt@aa.com",
    "age" : "14"
}
```

### Update student - PUT
```
http://student-api.treinetic.xyz/api/v1.0/student/{id}
````

```json
{

    "name" : "test",
    "email" : "tt@aa.com",
    "age" : "14"
}
```

### Delete student - DELETE
```
http://student-api.treinetic.xyz/api/v1.0/student/{id}
```

### Get all - GET 
```
http://student-api.treinetic.xyz/api/v1.0/student
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
