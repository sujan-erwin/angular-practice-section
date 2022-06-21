import { Component, OnInit } from '@angular/core';

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

  public  userName: string = 'sujan';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isEnabled = true;
    }, 3000);
  }

  addEmployee(){
     this.buttonColor = 'yellow';
    console.log('employee added to the list');
  }
}
