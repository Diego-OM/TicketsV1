import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SendgridService {

  constructor(private httpClient: HttpClient) { }


  sendEmail(){
    return this.httpClient.post("https://ticketsv1.azurewebsites.net/api/SendEmail?code=ahePDr-1iSAkLr44ohBjoU2A0FU_ty58V1lz7yb80vNLAzFuWkucew==", "");
  }
}
