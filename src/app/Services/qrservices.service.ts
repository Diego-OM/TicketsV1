import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debug } from 'console';
import { TicketV1 } from '../Classes/TicketV1';

export interface IQRCode{
  nombreDelEvento: string,
  numeroDeBoletos: number
}

@Injectable({
  providedIn: 'root'
})

export class QRServicesService {
  constructor(private httpClient : HttpClient) { }

  createQrCodes(eventName:string,ticketAmount:number){
    debugger
    var body = {
      "EventName": eventName,
      "TicketAmount": ticketAmount
    }
    
    return this.httpClient.post('https://ticketsv1.azurewebsites.net/api/CreateQrBulk?code=bdKzELtX4X_p1Hrd_1zSW64lrDYk8M5Oqvv3jieporW5AzFuo9luog==',body);
  }

  validateQR(ticketID:string,eventName:string){
    debugger
    
    var ticketV1 : TicketV1 = {
      TicketID: "Ticket ("+ticketID+")",
      EventName: eventName,
      TicketStatus: "New",
      TicketGeneratedDate: new Date(),
      TicketSaleDate: new Date(),
    }
   
   return this.httpClient.post('https://ticketsv1.azurewebsites.net/api/ValidateQR?code=F4gfojuGu4DA46DQz8gSG6Zdmd4thftvTndro3MlYFfpAzFu8Mye1A==',
   ticketV1);
  }

  getQrCodeList(ticketID: string, eventName:string) {
   debugger
    var body = {
      "idBoleto": ticketID,
      "nombreDelEvento": eventName
    }

    return this.httpClient.post("https://ticketsv1.azurewebsites.net/api/GetQRCodesList?code=wZFjuR-ac11kxDRGLp_M8d504K2-6iivj1eXQ38yTPA5AzFu67Bf0A==", body);
  }

  getEventList(){
  
    return this.httpClient.get("https://ticketsv1.azurewebsites.net/api/GetEventList?code=uGnPW_Cf2_lp1J7YVh_F4fDt6Lg-YXyeBESwRu_FSdrlAzFuHX3sJQ==")
  }

}
