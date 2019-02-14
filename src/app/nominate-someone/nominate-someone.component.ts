import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;

@Component({
  selector: 'app-nominate-someone',
  templateUrl: './nominate-someone.component.html',
  styleUrls: ['./nominate-someone.component.css']
})
export class NominateSomeoneComponent implements OnInit {

  months = ["Jan", "Feb","Mar"];

  nominateData: any = {
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
    this.nominateData.date = generatedDate;
    this.nominateData.isEntered = true;
    localStorage.setItem("nominateDetails", JSON.stringify(this.nominateData));
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
