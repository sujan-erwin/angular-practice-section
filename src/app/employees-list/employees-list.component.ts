import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  // employees-list works!
  public title: string = 'List of Employees';
  public isEnabled: boolean = false;
  public buttonColor: string = 'blue';

  public userName: string = 'sujan';

  public employees: Array<IEmployee> = [
    {
      id: 1,
      name: 'sai prasad',
      age: 27,
      permenantAddress: {
        houseNo: '1-58',
        street: 'main',
        city: 'tenali',
        district: 'guntur',
        state: 'ap',
        country: 'india',
        pincode: 524113
      },
      presentAddress: {
        houseNo: '1-58',
        street: 'main',
        city: 'tenali',
        district: 'guntur',
        state: 'ap',
        country: 'india',
        pincode: 524113
      },
    },
    {
      id: 2,
      name: 'sai',
      age: 27,
      permenantAddress: {
        houseNo: '1-58',
        street: 'main',
        city: 'tenali',
        district: 'guntur',
        state: 'ap',
        country: 'india',
        pincode: 524113
      },
      presentAddress: {
        houseNo: '1-58',
        street: 'main',
        city: 'tenali',
        district: 'guntur',
        state: 'ap',
        country: 'india',
        pincode: 524113
      },
    },
    {
      id: 3,
      name: 'manohar',
      age: 27,
      permenantAddress: {
        houseNo: '1-58',
        street: 'main',
        city: 'tenali',
        district: 'guntur',
        state: 'ap',
        country: 'india',
        pincode: 524113
      },
      presentAddress: {
        houseNo: '1-58',
        street: 'main',
        city: 'tenali',
        district: 'guntur',
        state: 'ap',
        country: 'india',
        pincode: 524113
      },
    },
    {
      id: 4,
      name: 'venkat',
      age: 27,
      permenantAddress: {
        houseNo: '1-58',
        street: 'main',
        city: 'tenali',
        district: 'guntur',
        state: 'ap',
        country: 'india',
        pincode: 524113
      },
      presentAddress: {
        houseNo: '1-58',
        street: 'main',
        city: 'tenali',
        district: 'guntur',
        state: 'ap',
        country: 'india',
        pincode: 524113
      },
    }
  ];

  public numerList: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isEnabled = true;
    }, 3000);
  }

  addEmployee() {
    this.buttonColor = 'yellow';
    console.log('employee added to the list');
  }
}
