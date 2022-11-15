import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { BarcodeFormat } from '@zxing/library';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { QRServicesService } from '../../../Services/qrservices.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  displayQrCodeReader = "none";
  enableScanner = false;

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent = new ZXingScannerComponent;

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  constructor(private router: Router, private qrService :QRServicesService) { }

  ngOnInit(): void {
    this.enableScanner = false;
    this.scanner.scanStop();
  }

  navigateHome(){
    this.router.navigateByUrl("/bodyComponent");
  }

  async goToValidarQR(){
    this.displayQrCodeReader = "block";

    this.scanner.askForPermission().then(r => {
      this.enableScanner = true;
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      this.scanner.scanStop();
      console.log("Validar QR Termino")
    })
    
  }

  closeQrCodeReader(){
    this.displayQrCodeReader = "none";
    this.enableScanner = false;
  }

  scanSuccessHandler(idBoleto: string){
    var result = this.qrService.validateQR(idBoleto);
    
    return result;
  }

}
