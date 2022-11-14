import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { QRServicesService } from '../../../Services/qrservices.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router,
    private qrCodeService: QRServicesService) { }

  ngOnInit(): void {

  }
  displayStyle = "none";
  displayTicketTable = "none";
  displaySpinner = "none";
  displayConfirmationOrError = "none";

  qrCodeFormGroup = new UntypedFormGroup({
    evento: new UntypedFormControl(''),
    numeroDeBoletos: new UntypedFormControl('')
  })

  onSubmit(args: any){
    this.qrCodeService.createQrCodes();
    this.displaySpinner = "block";

    setTimeout(() => {
      this.displaySpinner = "none";
      this.displayConfirmationOrError = "block";
     
      this.qrCodeFormGroup.reset();
    }, 5000);

     

    console.log(args);
  }

  openTicketTableModal(){
    this.displayTicketTable = "block";
  }

  closeTicketTableModal(){
    this.displayTicketTable = "none";
  }

  closeConfirmationOrErrorModal(){
    this.displayConfirmationOrError = "none";


    this.router.navigateByUrl('eventsComponent');
  }
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  navigateToComponent(){
    this.router.navigateByUrl("/eventsComponent");
  }
 
}
