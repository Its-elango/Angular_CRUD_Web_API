import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {  MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public designation: string,
    public age: string,
  ) {}
}

@Component({
  selector: 'app-viewemployeedetails',
  templateUrl: './viewemployeedetails.component.html',
  styleUrls: ['./viewemployeedetails.component.scss'] 
})
export class ViewemployeedetailsComponent implements OnInit {
  employees: Employee[] = [];
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string[] = ['name', 'designation', 'age', 'Action'];


  constructor(private httpClient: HttpClient, private router: Router) {}


  navigateToAddEmployee() {
    this.router.navigate(['/admin/addstaff']);
  }

  navigateToUpdateStaff(id: number, name: string, designation: string, age: string) {
    this.router.navigate(['/admin/updatestaff'], {
      queryParams: { id: id, name: name, designation: designation, age: age },
    });
  }

  DeleteStaff(id: number) {
    this.httpClient.delete('https://localhost:7288/api/API_Core/DeleteStaff/' + id).subscribe(
      () => {
        this.router.navigate(['/admin/employeedetails']);
        this.ngOnInit();
      },
    );
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.httpClient.get<Employee[]>('https://localhost:7288/api/API_Core/ViewStaff').subscribe(
      (response: Employee[]) => {
        console.log(response);
        this.employees = response;
        this.datasource = new MatTableDataSource<Employee>(this.employees);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
      }
    );
  }
}
