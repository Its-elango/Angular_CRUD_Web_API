import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public designation: string,
    public age: string,
  ) {}
}

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.scss']
})

export class UpdateemployeeComponent implements OnInit {
  id!: number;
  name: string = '';
  designation: string = '';
  age: string = '';
  successMessage:boolean=false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
      this.designation = params['designation'];
      this.age = params['age'];
    });
  }

  navigateToAllEmployee() {
    this.router.navigate(['/admin/employeedetails']);
  }

  ngOnInit(): void {}

  updateEmployee(f: NgForm) {
    const url = "https://localhost:7288/api/API_Core/UpdateStaff/"+this.id;

    this.httpClient.put(url, f.value).subscribe(
      (result) => {
        console.log(result);
        this.successMessage=true;
      },
    );
  }
}
