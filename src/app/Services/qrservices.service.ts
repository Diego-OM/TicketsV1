import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  validateQR(idBoleto:string,nombreDelEvento:string): Observable<boolean> {

    var body = {
      "idBoleto": idBoleto,
      "nombreDelEvento": nombreDelEvento
    }
    try {
      
   this.httpClient.post('https://ticketsv1.azurewebsites.net/api/ValidateQR?code=F4gfojuGu4DA46DQz8gSG6Zdmd4thftvTndro3MlYFfpAzFu8Mye1A==',
   body).subscribe(data => {
     return data;
   })

    } catch (error) {
      
    }

    return new Observable<boolean>();
  }

  getQrCodeList(idBoleto: string, nombreDelEvento:string){
    var body = {
      "idBoleto": idBoleto,
      "nombreDelEvento": nombreDelEvento
    }

    this.httpClient.post("https://ticketsv1.azurewebsites.net/api/GetQRCodesList?code=wZFjuR-ac11kxDRGLp_M8d504K2-6iivj1eXQ38yTPA5AzFu67Bf0A==", body)
      .subscribe(data => console.log(data));
  }
}
