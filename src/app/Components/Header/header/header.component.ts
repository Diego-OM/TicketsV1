import { AnimationMetadataType, query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import QrScanner from 'node_modules/qr-scanner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  displayQrCodeReader = "none";
  videoElement!:HTMLVideoElement;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateHome(){
    this.router.navigateByUrl("/bodyComponent");
  }

  goToValidarQR(){
    this.displayQrCodeReader = "block";
  }

  closeQrCodeReader(){
    this.displayQrCodeReader = "none";
  }

  validateQR(){
    const qrScanner = new QrScanner(this.videoElement, result => console.log('decoded qr code:', result));

  }

}
