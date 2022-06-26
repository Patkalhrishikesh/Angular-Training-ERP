import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  getEmployees(){
    return [
      {"id": 1, "name": "shubham", "age": 25},
      {"id": 2, "name": "akash", "age": 23},
      {"id": 3, "name": "nachiket", "age": 26},
      {"id": 4, "name": "hrishikesh", "age": 2},

  ]
  }

  constructor() { }
}
