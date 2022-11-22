import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TicketsV1';
  displayStyle = "none";
  displayTicketTable = "none";
  isIframe = false;
  loginDisplay = false;
  isAuthenticated = false;
  activeUser = "";
  accessToken = "";
  
  constructor(private router: Router,
    private msalService: MsalService){ }
 
  ngOnInit(): void {
   
    // const tokenRequest = {
    //     scopes: ["user.read"]
    // };
    
    // this.msalService.ssoSilent(tokenRequest)
    // .subscribe(observer => {
    //   this.accessToken = observer.accessToken;
    // })
  }

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

  login(){
    this.msalService.loginRedirect({
      scopes: ["user.read"]
    })
  }
 
}
