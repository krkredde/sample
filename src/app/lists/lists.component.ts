import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  months = ["Jan", "Feb","Mar"];

  listData: any = {
    GivenTo: '',
    approver: '',
    Description: '',
    category: '',
    DateGiven: '',
    isEntered: false
  }

  constructor() { }

  ngOnInit() {
   AdminLTE.init();
  }


  submitDetails() {
    let generatedDate = this.getFromattedDate();
    this.listData.date = generatedDate;
    this.listData.isEntered = true;
    localStorage.setItem("nominateDetails", JSON.stringify(this.listData));
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
