import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  scope = ["user.read"];
  isAuthenticated: boolean = false;
  currentUser: string = "";

  constructor(private msalService: MsalService) { }

  login(){
    this.msalService.loginRedirect({
      scopes: this.scope
    })
  }

  logOut(){
    debugger
    this.msalService.logoutRedirect().subscribe(data => {
     
    });

    this.isAuthenticated = false;
    sessionStorage.clear()


  }

  setAuthenticationStatus():void {
    debugger
    let activeAccount = this.msalService.instance.getActiveAccount();

   if(!activeAccount && this.msalService.instance.getAllAccounts().length > 0){
     this.isAuthenticated = true;
     activeAccount = this.msalService.instance.getAllAccounts()[0];
     this.msalService.instance.setActiveAccount(activeAccount);
     sessionStorage.setItem("authenticatedUser",activeAccount.username);
     this.currentUser = activeAccount.username
     console.log(this.currentUser)
   }
 }
}
