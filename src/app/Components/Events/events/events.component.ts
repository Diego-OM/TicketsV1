import { Component, OnInit } from '@angular/core';
import { QRServicesService } from 'src/app/Services/qrservices.service'; 

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  data: any;
  constructor(private qrService: QRServicesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    debugger
    var qrList = this.qrService.getQrCodeList('','eventoprueba');
    this.data = qrList;
    return qrList;
  }

}
