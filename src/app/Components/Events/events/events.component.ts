import { Component, OnInit } from '@angular/core';
import { Observable, isObservable, firstValueFrom } from 'rxjs';
import { QRCode } from 'src/app/Classes/QRCode';
import { QRServicesService } from 'src/app/Services/qrservices.service'; 
import { ActivatedRoute } from '@angular/router';
import { SendgridService } from 'src/app/Services/sendgrid.service';

interface Tickets {
   idBoleto: string;
   nombreDelEvento: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  tableData : any;
  id: any;
  displayShareModal = "none";
  
  constructor(private qrService: QRServicesService, private route: ActivatedRoute, private sendGridService: SendgridService) { }

  ngOnInit(){
    
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      debugger
      this.qrService.getQrCodeList('',this.id).subscribe(data => 
        {
          this.tableData = data;
        });
    });

  }

  shareModal(){
    this.displayShareModal = "block";
  }

  closeShareModal(){
    this.displayShareModal = "none";
  }

  sendEmail(){
    this.sendGridService.sendEmail().subscribe(res => {
      console.log(res)
    })
  }
  

}
