import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { QRServicesService } from '../../../Services/qrservices.service';
import { SendgridService } from 'src/app/Services/sendgrid.service';
import { ThisReceiver } from '@angular/compiler';
import { stringify } from 'querystring';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  eventList : any;
  emailResponse: any;
  displayEventsModal = "none";
  numberOfEvents = 0;
  constructor(private router: Router,
    private qrCodeService: QRServicesService,
    private sendGridService: SendgridService) { }

  ngOnInit(): void {
    this.getEventList();
  }
  displayStyle = "none";
  displayTicketTable = "none";
  displaySpinner = "none";
  displayConfirmationOrError = "none";

  qrCodeFormGroup = new UntypedFormGroup({
    evento: new UntypedFormControl('', Validators.required),
    numeroDeBoletos: new UntypedFormControl('', Validators.required)
  })

  onSubmit(args: any){
   try {
    this.qrCodeService.createQrCodes(args.value.evento,args.value.numeroDeBoletos).subscribe();
    this.displaySpinner = "block";

    setTimeout(() => {
      this.displaySpinner = "none";
      this.displayConfirmationOrError = "block";
      this.qrCodeFormGroup.reset();
    }, 5000);

    
   } catch (error) {
    debugger
      console.log(error);
   }
  }

  openTicketTableModal(){
    this.displayTicketTable = "block";
  }

  closeTicketTableModal(){
    this.displayTicketTable = "none";
  }

  closeConfirmationOrErrorModal(){
    this.displayConfirmationOrError = "none";

  }
  
  openEventsModal() {
    this.displayEventsModal = "block";
    this.getEventList();
    
  }

  closePopup() {
    this.displayEventsModal = "none";
  }

  getEventList(){
    this.qrCodeService.getEventList().subscribe(data => {
      
      this.eventList = data;
      this.numberOfEvents = this.eventList.length;
    })
  }

  navigateToEvent(event:Object){
    this.router.navigateByUrl("/eventsComponent/" + event);
  }
 
}
