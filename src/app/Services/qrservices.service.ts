import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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
    
    this.httpClient.post('https://ticketsv1.azurewebsites.net/api/CreateQrBulk?code=bdKzELtX4X_p1Hrd_1zSW64lrDYk8M5Oqvv3jieporW5AzFuo9luog==',body).subscribe();
  }

  validateQR(qr: string){
    const request = this.httpClient.post<IQRCode>('https://ticketsv1.azurewebsites.net/api/ValidateQR?code=F4gfojuGu4DA46DQz8gSG6Zdmd4thftvTndro3MlYFfpAzFu8Mye1A==', 
    qr, );

    request.subscribe(data => {
      return data;
    });

    

  }
}
