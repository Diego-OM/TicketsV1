import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Tickets {
  idBoleto: string;
  nombreDelEvento: string;
}

export interface IQRCode{
  nombreDelEvento: string,
  numeroDeBoletos: number
}

@Injectable({
  providedIn: 'root'
})

export class QRServicesService {
  constructor(private httpClient : HttpClient) { }

  createQrCodes(nombreDelEvento:string,ticketNumber:number){
    
    var body = {
      "nombreDelEvento": nombreDelEvento,
      "numeroDeBoletos": ticketNumber,
    }
    
    return this.httpClient.post('https://ticketsv1.azurewebsites.net/api/CreateQrBulk?code=bdKzELtX4X_p1Hrd_1zSW64lrDYk8M5Oqvv3jieporW5AzFuo9luog==',body);
  }

  validateQR(idBoleto:string,nombreDelEvento:string){
    debugger
    var body = {
      "idBoleto": "Ticket ("+idBoleto+")",
      "nombreDelEvento": nombreDelEvento
    }
   
   return this.httpClient.post('https://ticketsv1.azurewebsites.net/api/ValidateQR?code=F4gfojuGu4DA46DQz8gSG6Zdmd4thftvTndro3MlYFfpAzFu8Mye1A==',
   body);
  }

  getQrCodeList(idBoleto: string, nombreDelEvento:string) {
   
    var body = {
      "idBoleto": idBoleto,
      "nombreDelEvento": nombreDelEvento
    }

    return this.httpClient.post("https://ticketsv1.azurewebsites.net/api/GetQRCodesList?code=wZFjuR-ac11kxDRGLp_M8d504K2-6iivj1eXQ38yTPA5AzFu67Bf0A==", body);
  }

  getEventList(nombreDelEvento:string){

    var body = {
      "idBoleto": '',
      "nombreDelEvento": nombreDelEvento
    }

    return this.httpClient.get("https://ticketsv1.azurewebsites.net/api/GetEventList?code=uGnPW_Cf2_lp1J7YVh_F4fDt6Lg-YXyeBESwRu_FSdrlAzFuHX3sJQ==")
  }

}
