import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public header: string = 'Employee';
  @Input() employee: IEmployee | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  highLighter(id: number = 0){
     return id%2 == 0;
  }

}
