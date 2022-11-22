import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { BarcodeFormat, Result } from '@zxing/library';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { QRServicesService } from '../../../Services/qrservices.service';
import { QRCode } from '../../../Classes/QRCode'; 
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AccountInfo, AuthenticationResult, EventMessage, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  displayQrCodeReader = "none";
  displayConfirmation = "none";
  enableScanner = false;
  confirmationMessage = "";
  displayConfirmationCheckMark = "none";
  isAuthenticated = false;
  currentUser : string | undefined;
  

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent = new ZXingScannerComponent;

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  constructor(private router: Router, 
    private qrService :QRServicesService,
    private msalService: MsalService,
    private msalBroadcasService: MsalBroadcastService) { }

  ngOnInit(): void {
    this.msalBroadcasService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None)
    )
    .subscribe(() => {
      this.setAuthenticationStatus()
      
    })

    

    this.enableScanner = false;

  }

  setAuthenticationStatus():void {
     let activeAccount = this.msalService.instance.getActiveAccount();

    if(!activeAccount && this.msalService.instance.getAllAccounts().length > 0){
      this.isAuthenticated = true;
      activeAccount = this.msalService.instance.getAllAccounts()[0];
      this.msalService.instance.setActiveAccount(activeAccount);
      sessionStorage.setItem("authentcatedUser",activeAccount.username);
      this.currentUser = activeAccount.username
      console.log(this.currentUser)
    }
  }

  goToEventos(){
    this.router.navigateByUrl('/eventsComponent')
  }

  navigateHome(){
    this.router.navigateByUrl("/bodyComponent");
  }


  closeConfirmation(){
    this.displayConfirmation = "none";
  }

  async goToValidarQR(){
    this.displayQrCodeReader = "block";

    this.scanner.askForPermission().then(r => {
      if(!r){
        this.scanner.askForPermission()
      }
      this.enableScanner = true;
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      this.scanner.scanStop();
    })
    
  }

  closeQrCodeReader(){
    this.displayQrCodeReader = "none";
    this.enableScanner = false;
   
  }

  async scanErrorHandler($args: any){

  }
  
  
  async scanSuccessHandler($args: any){
    this.enableScanner = false;
    var res: any;
    var req = JSON.parse($args)
    this.qrService.validateQR(req.idBoleto, req.nombreDelEvento.toLowerCase())
    .subscribe(data => {
      res = data;
      if(res == "Ticket Valid!"){
        this.confirmationMessage = "Ticket Is Valid"
        this.displayQrCodeReader = "none"
        this.displayConfirmation = "block";
        this.displayConfirmationCheckMark = "block"
      }else if(res == "Ticket Not Found"){
        this.displayQrCodeReader = "none"
        this.displayConfirmationCheckMark = "none"
        this.confirmationMessage = "Ticket Not Found"
        this.displayConfirmation = "block"
      }else if(res == "Event Not Found!"){
        this.displayQrCodeReader = "none"
        this.confirmationMessage ="Event Not Found!"
        this.displayConfirmation = "block"
        this.displayConfirmationCheckMark = "none"

      }
    })
     
  }

  login(){
    this.msalService.loginPopup({
      scopes:["user.read"]
    }).pipe()
  }

  logOut(){
    this.msalService.logoutRedirect().subscribe(data => {
      this.navigateHome()
    });

    this.isAuthenticated = false;
    sessionStorage.clear()


  }

}
