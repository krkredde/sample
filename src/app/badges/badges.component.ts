import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  months = ["Jan", "Feb","Mar"];

  badgeData: any = {
    recognizeInput: '',
    approver: '',
    message: '',
    category: '',
    date: '',
    isEntered: false
  }
  constructor() { }

  ngOnInit() {
    AdminLTE.init();
  }

  submitDetails() {
    let generatedDate = this.getFromattedDate();
    this.badgeData.date = generatedDate;
    this.badgeData.isEntered = true;
    localStorage.setItem("nominateDetails", JSON.stringify(this.badgeData));
    //this.username = localStorage.getItem('profile');
  }

  cancelData() {
    localStorage.setItem("nominateDetails", JSON.stringify({})); 
  }

  getFromattedDate() {
    let date = new Date();
    let month = this.months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    return month + " " + day + ", " + year;
  }

}
