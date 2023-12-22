// addemployee.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export class Employee {
  constructor(
    public name: string,
    public designation: string,
    public age: string,
  ) {}
}

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  name: string = '';
  designation: string = '';
  age: string = '';
  successMessage:boolean=false;

  constructor(private httpClient: HttpClient,private router: Router) {}
  
  navigateToAllEmployee(){
    this.router.navigate(['/admin/employeedetails']);
  }
  ngOnInit(): void {
  }

  addEmployee(f: NgForm) {
    const url = "https://localhost:7288/api/API_Core/AddStaff";

    this.httpClient.post(url, f.value).subscribe(      
      (result) => {
        console.log(result);
        this.successMessage =true;
        f.resetForm();
      },
      
    );
  
  }
}
