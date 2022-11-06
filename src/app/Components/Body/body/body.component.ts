import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayStyle = "none";
  displayTicketTable = "none";

  openTicketTableModal(){
    this.displayTicketTable = "block";
  }

  closeTicketTableModal(){
    this.displayTicketTable = "none";
  }
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
