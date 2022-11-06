import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcommerceV1';

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
