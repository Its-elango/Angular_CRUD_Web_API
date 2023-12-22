import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {  MatTableDataSource } from '@angular/material/table';

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public designation: string,
    public age: string,
  ) {}
}

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.scss']
})
export class ViewemployeeComponent implements OnInit {
  employees: Employee[] = [];
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string[] = ['name', 'designation', 'age'];

  constructor(private httpClient: HttpClient) {}

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
