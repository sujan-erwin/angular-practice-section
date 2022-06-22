import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Training';
  public  isDisplayed: boolean = false;

  ngOnInit(): void {

    setTimeout(() => {
     this.isDisplayed = true;
    },2000)
  }
}
