import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IQRCode{
  nombreDelEvento: string,
  numeroDeBoletos: number
}

@Injectable({
  providedIn: 'root'
})

export class QRServicesService {

  constructor(private httpClient : HttpClient) { }

  createQrCodes(){
    const request = this.httpClient.post<IQRCode>('https://ticketsv1.azurewebsites.net/api/CreateQR?code=7HzY2XroActn3Qbr5fet49eqKVwUxwOEFOEAee9ukjVxAzFuQR8pNQ==', "");

    request.subscribe(data => {
      console.log(data);
    });
  }
}
