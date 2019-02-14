import { Component, OnInit } from '@angular/core';
//Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css']
})
export class StarterContentComponent implements OnInit {

  appreciations: any = [];

  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
    let appreciationData = JSON.parse(localStorage.getItem("appreciationData"));
    let nominateObj = JSON.parse(localStorage.getItem("nominateDetails"));
    if(appreciationData && nominateObj.isEntered){
      this.appreciations = appreciationData;
      this.appreciations.push(nominateObj);
      localStorage.setItem("appreciationData",  JSON.stringify(this.appreciations));
    } else {
      localStorage.setItem("appreciationData",  JSON.stringify([]));
    }
    
  }

  deleteAppreciations(index) {
    this.appreciations.splice(index, 1);
    localStorage.setItem("appreciationData",JSON.stringify(this.appreciations));
  }


}
