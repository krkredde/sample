import { Component, OnInit } from '@angular/core';

declare var AdminLTE: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // firstName: string;
  // lastName: string;

  constructor() { }

  ngOnInit() {
    AdminLTE.init();
    // this.firstName = 'Ravi';
    // this.lastName = 'Kiran';
  }

}
